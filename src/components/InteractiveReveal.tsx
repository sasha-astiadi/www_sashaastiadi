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

let InteractiveRevealContext = createContext<InteractiveRevealContextValue | null>(
  null,
)

function useInteractiveRevealContext() {
  let ctx = useContext(InteractiveRevealContext)
  if (!ctx) {
    throw new Error('RevealSection must be used within <RevealGroup>.')
  }
  return ctx
}

export function useRevealIsActive(id: string) {
  let { activeId } = useInteractiveRevealContext()
  return activeId === id
}

export function RevealGroup({ children }: { children: React.ReactNode }) {
  let sectionsRef = useRef<Map<string, SectionRecord>>(new Map())
  let rafRef = useRef<number | null>(null)
  let lastPointerY = useRef<number | null>(null)
  let lastPointerMoveAt = useRef<number | null>(null)

  let [activeId, setActiveId] = useState<string | null>(null)
  let [focusById, setFocusById] = useState<Record<string, number>>({})

  let computeActive = useCallback(() => {
    rafRef.current = null

    let sections = Array.from(sectionsRef.current.values())
      .filter((s) => s.el.isConnected)
      .filter((s) => s.revealed)

    if (sections.length === 0) {
      setActiveId(null)
      return
    }

    let pointerY = lastPointerY.current
    let now = Date.now()
    let pointerRecentlyMoved =
      lastPointerMoveAt.current != null && now - lastPointerMoveAt.current < 1500

    // Fallback for touch/no-mouse: use viewport center.
    let targetY = pointerY ?? window.innerHeight / 2

    let best: { id: string; dist: number } | null = null

    let nextFocus: Record<string, number> = {}
    let vh = Math.max(1, window.innerHeight)

    for (let s of sections) {
      let rect = s.el.getBoundingClientRect()
      let centerY = rect.top + rect.height / 2
      let dist = Math.abs(centerY - targetY)

      // User-friendly fade: only when pointer is actively moving.
      // Focus is 1 when close, tapering to 0 as distance approaches ~1 viewport.
      let focus = pointerRecentlyMoved ? 1 - Math.min(1, dist / (vh * 0.9)) : 1
      nextFocus[s.id] = focus

      if (!best || dist < best.dist) {
        best = { id: s.id, dist }
      }
    }

    setActiveId(best?.id ?? null)
    setFocusById(nextFocus)
  }, [])

  let scheduleCompute = useCallback(() => {
    if (rafRef.current != null) return
    rafRef.current = window.requestAnimationFrame(computeActive)
  }, [computeActive])

  let register = useCallback(
    (id: string, el: HTMLElement) => {
      let existing = sectionsRef.current.get(id)
      sectionsRef.current.set(id, {
        id,
        el,
        revealed: existing?.revealed ?? false,
      })
      scheduleCompute()
    },
    [scheduleCompute],
  )

  let unregister = useCallback(
    (id: string) => {
      sectionsRef.current.delete(id)
      scheduleCompute()
    },
    [scheduleCompute],
  )

  let setRevealed = useCallback(
    (id: string, revealed: boolean) => {
      let rec = sectionsRef.current.get(id)
      if (!rec) return
      if (rec.revealed === revealed) return
      rec.revealed = revealed
      sectionsRef.current.set(id, rec)
      scheduleCompute()
    },
    [scheduleCompute],
  )

  useEffect(() => {
    let prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReduced.matches) {
      // Still compute active section, but don't track pointer frequently.
      scheduleCompute()
      return
    }

    let canHover = window.matchMedia('(hover: hover) and (pointer: fine)')

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

  let value = useMemo(
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
  let { register, unregister, setRevealed, activeId, getFocus } =
    useInteractiveRevealContext()

  let ref = useRef<HTMLDivElement | null>(null)
  let [revealed, setRevealedLocal] = useState(false)

  useEffect(() => {
    let el = ref.current
    if (!el) return

    register(id, el)

    return () => {
      unregister(id)
    }
  }, [id, register, unregister])

  useEffect(() => {
    let el = ref.current
    if (!el) return

    let prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReduced.matches) {
      setRevealedLocal(true)
      setRevealed(id, true)
      return
    }

    let observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
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

  let isActive = activeId === id
  let focus = getFocus(id)

  let base =
    'transition duration-700 ease-out will-change-transform motion-reduce:transition-none'
  let revealState = revealed
    ? 'translate-y-0'
    : 'opacity-0 translate-y-6'

  // Fade/scale are applied via inline styles so we can smoothly
  // adjust them per-section based on pointer distance.
  let opacity = revealed ? 0.55 + 0.45 * focus : undefined
  let scale = revealed ? (isActive ? 1.01 : 1 + 0.006 * focus) : undefined

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
