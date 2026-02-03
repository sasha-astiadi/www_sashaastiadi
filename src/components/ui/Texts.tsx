import { libreBodoni } from '@/app/fonts'

export const libreBodoniItalic = `${libreBodoni.className} font-normal italic`

export const newHeroGradientLight =
  'bg-linear-to-b from-[#ffffff] to-[#ffffff]/20'

export const newHeroGradientDark =
  'dark:bg-linear-to-b dark:from-[#18181B] dark:to-[#18181B]/10'

export const newHeroGradientLightDiagonal =
  'bg-linear-to-br from-[#ffffff] to-[#ffffff]/20'

export const newHeroGradientDarkDiagonal =
  'dark:bg-linear-to-br dark:from-[#18181B] dark:to-[#18181B]/10'

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
