'use client'

import Image from 'next/image'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import clsx from 'clsx'

type CompareProps = {
  firstImage: string
  secondImage: string
  firstImageAlt?: string
  secondImageAlt?: string
  className?: string
  imageClassName?: string
  aspectClassName?: string
  initialPosition?: number
}

export function Compare({
  firstImage,
  secondImage,
  firstImageAlt = '',
  secondImageAlt = '',
  className,
  imageClassName,
  aspectClassName = 'aspect-video',
  initialPosition = 0.5,
}: CompareProps) {
  const id = useId()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [position, setPosition] = useState(() => {
    if (Number.isFinite(initialPosition)) {
      return Math.min(0.95, Math.max(0.05, initialPosition))
    }
    return 0.5
  })
  const [isDragging, setIsDragging] = useState(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = clientX - rect.left
    const next = x / rect.width
    setPosition(Math.min(0.95, Math.max(0.05, next)))
  }, [])

  useEffect(() => {
    if (!isDragging) return

    const onMove = (e: PointerEvent) => {
      setFromClientX(e.clientX)
    }
    const onUp = () => {
      setIsDragging(false)
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [isDragging, setFromClientX])

  return (
    <div
      ref={containerRef}
      className={clsx(
        'relative w-full overflow-hidden rounded-md select-none',
        aspectClassName,
        className,
      )}
      onPointerDown={(e) => {
        setIsDragging(true)
        setFromClientX(e.clientX)
      }}
      role="group"
      aria-label="Image comparison"
    >
      <Image
        alt={secondImageAlt}
        src={secondImage}
        fill
        sizes="(min-width: 1024px) 480px, 100vw"
        className={clsx('object-cover', imageClassName)}
        priority={false}
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${Math.round((1 - position) * 10000) / 100}% 0 0)` }}
        aria-hidden="true"
      >
        <Image
          alt={firstImageAlt}
          src={firstImage}
          fill
          sizes="(min-width: 1024px) 480px, 100vw"
          className={clsx('object-cover', imageClassName)}
          priority={false}
        />
      </div>

      <div
        className="absolute inset-y-0"
        style={{ left: `${position * 100}%` }}
        aria-hidden="true"
      >
        <div className="absolute inset-y-0 -translate-x-1/2 w-px bg-white/60 dark:bg-white/40" />
        <button
          type="button"
          aria-controls={id}
          aria-label="Drag to compare"
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-md ring-1 ring-zinc-900/10 backdrop-blur hover:bg-white dark:bg-zinc-900/90 dark:text-zinc-100 dark:ring-white/10"
          onPointerDown={(e) => {
            e.stopPropagation()
            setIsDragging(true)
          }}
          onClick={(e) => e.preventDefault()}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path
              d="M8 5l-5 7 5 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 5l5 7-5 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div id={id} className="sr-only" />
    </div>
  )
}
