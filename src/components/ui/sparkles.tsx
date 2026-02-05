'use client'

import { useMemo } from 'react'
import clsx from 'clsx'

type Sparkle = {
  id: string
  top: number
  left: number
  size: number
  delay: number
  duration: number
  opacity: number
}

type SparklesProps = {
  className?: string
  count?: number
}

function prng(seed: number) {
  let t = seed + 0x6d2b79f5
  t = Math.imul(t ^ (t >>> 15), t | 1)
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

export function Sparkles({ className, count = 18 }: SparklesProps) {
  const sparkles = useMemo<Sparkle[]>(() => {
    return Array.from({ length: count }).map((_, i) => {
      const a = prng(i * 11 + 1)
      const b = prng(i * 11 + 2)
      const c = prng(i * 11 + 3)
      const d = prng(i * 11 + 4)
      const e = prng(i * 11 + 5)
      const f = prng(i * 11 + 6)

      const size = 6 + a * 12
      return {
        id: `sparkle-${i}`,
        top: b * 100,
        left: c * 100,
        size,
        delay: d * 2.0,
        duration: 1.8 + e * 2.2,
        opacity: 0.3 + f * 0.45,
      }
    })
  }, [count])

  return (
    <div className={clsx('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white/70 blur-[0.5px] dark:bg-white/40"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: `sparkles-float ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      <style>
        {`@keyframes sparkles-float {
          0%, 100% { transform: translate3d(0, 0, 0) scale(0.95); }
          50% { transform: translate3d(0, -10px, 0) scale(1.05); }
        }`}
      </style>
    </div>
  )
}
