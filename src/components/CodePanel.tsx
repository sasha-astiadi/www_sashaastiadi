'use client'

import { useEffect, useMemo, useState } from 'react'

export function CodePanel() {
  const codeLines = useMemo(
    () => [
      'import { clsx, type ClassValue } from "clsx"',
      'import { twMerge } from "tailwind-merge"',
      '',
      'export function cn(...inputs: ClassValue[]) {',
      '  return twMerge(clsx(inputs))',
      '}',
      '',
      "import { forwardRef } from 'react'",
      "import clsx from 'clsx'",
      '',
      "export const ContainerOuter = forwardRef<",
      "  React.ElementRef<'div'>,",
      "  React.ComponentPropsWithoutRef<'div'>",
      ">(function OuterContainer({ className, children, ...props }, ref) {",
      "  return (",
      "    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>",
      "      <div className=\"mx-auto w-full max-w-7xl lg:px-4\">{children}</div>",
      '    </div>',
      '  )',
      '})',
    ],
    [],
  )

  const fullText = useMemo(() => codeLines.join('\n'), [codeLines])
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    const typingMs = 28
    const pauseMs = 1100

    let timeoutId: number | undefined

    const tick = () => {
      setCharCount((current) => {
        if (current >= fullText.length) {
          timeoutId = window.setTimeout(() => setCharCount(0), pauseMs)
          return current
        }

        return current + 1
      })

      timeoutId = window.setTimeout(tick, typingMs)
    }

    timeoutId = window.setTimeout(tick, typingMs)

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [fullText])

  const visibleText = fullText.slice(0, charCount)
  const visibleLines = visibleText.split('\n')
  const activeLineIndex = Math.max(0, visibleLines.length - 1)

  return (
    <div className="relative w-full overflow-hidden rounded-md shadow-2xl aspect-10/6 sm:aspect-2/1 lg:aspect-video">
      <div className="absolute inset-0 rounded-md bg-zinc-950/90 ring-1 ring-white/10" />

      <div className="relative flex h-full w-full flex-col">
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>

          <div className="ml-2 flex min-w-0 items-center gap-2">
            <div className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-zinc-200/90 ring-1 ring-white/10">
              app/page.tsx
            </div>
            <div className="hidden rounded-md bg-white/0 px-2 py-1 text-[11px] text-zinc-400/80 ring-1 ring-white/0 sm:block">
              components/…
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden p-3 sm:p-4">
          <pre className="h-full w-full overflow-hidden whitespace-pre-wrap wrap-break-word font-mono text-[12px] leading-6 text-zinc-200/90 sm:text-[13px]">
            <code>
              {codeLines.map((fullLine, idx) => {
                const line = visibleLines[idx] ?? ''
                const isActiveLine = idx === activeLineIndex && charCount < fullText.length
                const className = fullLine.startsWith('import')
                  ? 'text-violet-300'
                  : fullLine.startsWith('export')
                    ? 'text-sky-300'
                    : 'text-zinc-200'

                return (
                  <span key={idx}>
                    <span className="text-zinc-400">{idx + 1}</span>
                    <span className="select-none">  </span>
                    <span className={className}>{line}</span>
                    {isActiveLine && (
                      <span className="inline-block w-[0.6ch] align-baseline">
                        <span className="codepanel-cursor">|</span>
                      </span>
                    )}
                    {'\n'}
                  </span>
                )
              })}

              {charCount >= fullText.length && (
                <span className="inline-block w-[0.6ch] align-baseline">
                  <span className="codepanel-cursor">|</span>
                </span>
              )}
            </code>
          </pre>
        </div>
      </div>

      <style>
        {`@keyframes codepanel-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
          .codepanel-cursor { animation: codepanel-blink 1s steps(1, end) infinite; }`}
      </style>
    </div>
  )
}
