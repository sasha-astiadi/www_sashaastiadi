import { Container } from '@/components/Container'
import { libreBodoniItalic } from '@/components/ui/Texts'

function renderStyledTitle(title: string) {
  const styledWords = new Set(['design', 'technology', 'people', 'events', 'podcasts'])
  const parts = title.split(/\b(design|technology|people|events|podcasts)\b/gi)

  return parts.map((part, index) => {
    if (styledWords.has(part.toLowerCase())) {
      return (
        <span key={index} className={libreBodoniItalic}>
          {part}
        </span>
      )
    }

    return <span key={index}>{part}</span>
  })
}

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xlfont-normal tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {renderStyledTitle(title)}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
