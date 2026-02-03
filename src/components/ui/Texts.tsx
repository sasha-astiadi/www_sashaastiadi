import { libreBodoni } from '@/app/fonts'

export const libreBodoniItalic = `${libreBodoni.className} font-normal italic`

export const newHeroGradientLight =
  'bg-noise bg-linear-to-b from-[#ffffff] to-[#ffffff]/25'

export const newHeroGradientDark =
  'bg-noise dark:bg-linear-to-b dark:from-[#18181B] dark:to-[#18181B]/10'

export const newHeroGradientLightDiagonal =
  'bg-noise bg-linear-to-br from-[#ffffff] to-[#ffffff]/25'

export const newHeroGradientDarkDiagonal =
  'bg-noise dark:bg-linear-to-br dark:from-[#18181B] dark:to-[#18181B]/10'

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
