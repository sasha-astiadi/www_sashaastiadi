import { libreBodoni } from '@/app/fonts'

export const libreBodoniItalic = `${libreBodoni.className} font-normal italic`

export function Eyebrow({ className, ...props }: React.ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2
      className={[
        'text-base/7 font-normal text-zinc-600 dark:text-zinc-400 leading-loose tracking-[0.2em]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}
