'use client'

import { useEffect, useState } from 'react'
import { CheckCircle } from 'lucide-react'

const steps = [
  'Clarify the problem & success metrics',
  'Audit the existing product or codebase',
  'Define scope and technical constraints',
  'Design flows and edge cases',
  'Validate through user testing',
  'Ship and iterate (v1.0)',
]

export function ProductChecklist() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (steps.length + 1))
    }, 1400)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded-md shadow-2xl aspect-10/6 sm:aspect-2/1 lg:aspect-video">
      <div className="absolute inset-0 rounded-md bg-zinc-50/60 ring-1 ring-zinc-900/10 dark:bg-zinc-950/70 dark:ring-white/10" />
      <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-6">
        <ul className="w-full max-w-md space-y-3 text-sm">
          {steps.map((step, index) => {
            const completed = index < activeStep
            const current = index === activeStep

            return (
              <li key={step} className="flex items-center gap-3">
                <CheckCircle
                  className={
                    completed
                      ? 'h-4 w-4 text-emerald-500 transition-colors dark:text-emerald-400'
                      : 'h-4 w-4 text-zinc-300 transition-colors dark:text-zinc-700'
                  }
                />
                <span
                  className={
                    completed
                      ? 'text-zinc-900/90 transition-colors dark:text-zinc-100'
                      : current
                        ? 'text-zinc-700 transition-colors dark:text-zinc-300'
                        : 'text-zinc-500 transition-colors dark:text-zinc-500'
                  }
                >
                  {step}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
