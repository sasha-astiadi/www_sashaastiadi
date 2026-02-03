import { Libre_Bodoni, Libre_Caslon_Text } from 'next/font/google'

export const libreCaslonText = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

export const libreBodoni = Libre_Bodoni({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})
