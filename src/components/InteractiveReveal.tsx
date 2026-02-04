'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

type SectionRecord = {
  id: string
  el: HTMLElement
  revealed: boolean
}

type InteractiveRevealContextValue = {
  register: (id: string, el: HTMLElement) => void
  unregister: (id: string) => void
  setRevealed: (id: string, revealed: boolean) => void
  activeId: string | null
  getFocus: (id: string) => number
}

const InteractiveRevealContext = createContext<InteractiveRevealContextValue | null>(
  null,
)

function useInteractiveRevealContext() {
  const ctx = useContext(InteractiveRevealContext)
  if (!ctx) {
    throw new Error('RevealSection must be used within <RevealGroup>.')
  }
  return ctx
}

export function useRevealIsActive(id: string) {
  const { activeId } = useInteractiveRevealContext()
  return activeId === id
}

export function RevealGroup({ children }: { children: React.ReactNode }) {
  const sectionsRef = useRef<Map<string, SectionRecord>>(new Map())
  const rafRef = useRef<number | null>(null)
  const lastPointerY = useRef<number | null>(null)
  const lastPointerMoveAt = useRef<number | null>(null)

  const [activeId, setActiveId] = useState<string | null>(null)
  const [focusById, setFocusById] = useState<Record<string, number>>({})

  const computeActive = useCallback(() => {
    rafRef.current = null

    const sections = Array.from(sectionsRef.current.values())
      .filter((s) => s.el.isConnected)
      .filter((s) => s.revealed)

    if (sections.length === 0) {
      setActiveId(null)
      return
    }

    const pointerY = lastPointerY.current
    const now = Date.now()
    const pointerRecentlyMoved =
      lastPointerMoveAt.current != null && now - lastPointerMoveAt.current < 1500

    // Fallback for touch/no-mouse: use viewport center.
    const targetY = pointerY ?? window.innerHeight / 2

    let best: { id: string; dist: number } | null = null

    const nextFocus: Record<string, number> = {}
    const vh = Math.max(1, window.innerHeight)

    for (const s of sections) {
      const rect = s.el.getBoundingClientRect()
      const centerY = rect.top + rect.height / 2
      const dist = Math.abs(centerY - targetY)

      // User-friendly fade: only when pointer is actively moving.
      // Focus is 1 when close, tapering to 0 as distance approaches ~1 viewport.
      const focus = pointerRecentlyMoved ? 1 - Math.min(1, dist / (vh * 0.9)) : 1
      nextFocus[s.id] = focus

      if (!best || dist < best.dist) {
        best = { id: s.id, dist }
      }
    }

    setActiveId(best?.id ?? null)
    setFocusById(nextFocus)
  }, [])

  const scheduleCompute = useCallback(() => {
    if (rafRef.current != null) return
    rafRef.current = window.requestAnimationFrame(computeActive)
  }, [computeActive])

  const register = useCallback(
    (id: string, el: HTMLElement) => {
      const existing = sectionsRef.current.get(id)
      sectionsRef.current.set(id, {
        id,
        el,
        revealed: existing?.revealed ?? false,
      })
      scheduleCompute()
    },
    [scheduleCompute],
  )

  const unregister = useCallback(
    (id: string) => {
      sectionsRef.current.delete(id)
      scheduleCompute()
    },
    [scheduleCompute],
  )

  const setRevealed = useCallback(
    (id: string, revealed: boolean) => {
      const rec = sectionsRef.current.get(id)
      if (!rec) return
      if (rec.revealed === revealed) return
      rec.revealed = revealed
      sectionsRef.current.set(id, rec)
      scheduleCompute()
    },
    [scheduleCompute],
  )

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReduced.matches) {
      // Still compute active section, but don't track pointer frequently.
      scheduleCompute()
      return
    }

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)')

    function onPointerMove(e: PointerEvent) {
      if (!canHover.matches) return
      lastPointerY.current = e.clientY
      lastPointerMoveAt.current = Date.now()
      scheduleCompute()
    }

    function onScroll() {
      scheduleCompute()
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    scheduleCompute()

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [scheduleCompute])

  const value = useMemo(
    () => ({
      register,
      unregister,
      setRevealed,
      activeId,
      getFocus: (id: string) => focusById[id] ?? 1,
    }),
    [register, unregister, setRevealed, activeId, focusById],
  )

  return (
    <InteractiveRevealContext.Provider value={value}>
      {children}
    </InteractiveRevealContext.Provider>
  )
}

export function RevealSection({
  id,
  children,
  className,
}: {
  id: string
  children: React.ReactNode
  className?: string
}) {
  const { register, unregister, setRevealed, activeId, getFocus } =
    useInteractiveRevealContext()

  const ref = useRef<HTMLDivElement | null>(null)
  const [revealed, setRevealedLocal] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    register(id, el)

    return () => {
      unregister(id)
    }
  }, [id, register, unregister])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReduced.matches) {
      setRevealedLocal(true)
      setRevealed(id, true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealedLocal(true)
            setRevealed(id, true)
            observer.disconnect()
            break
          }
        }
      },
      { root: null, threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [id, setRevealed])

  const isActive = activeId === id
  const focus = getFocus(id)

  const base =
    'transition duration-700 ease-out will-change-transform motion-reduce:transition-none'
  const revealState = revealed
    ? 'translate-y-0'
    : 'opacity-0 translate-y-6'

  // Fade/scale are applied via inline styles so we can smoothly
  // adjust them per-section based on pointer distance.
  const opacity = revealed ? 0.55 + 0.45 * focus : undefined
  const scale = revealed ? (isActive ? 1.01 : 1 + 0.006 * focus) : undefined

  return (
    <div
      ref={ref}
      className={[base, revealState, className].filter(Boolean).join(' ')}
      style={
        revealed
          ? {
              opacity,
              transform: `translateY(0px) scale(${scale})`,
            }
          : undefined
      }
    >
      {children}
    </div>
  )
}
