import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    "I’ve had the chance to speak at a few events and appear on a handful of podcasts.",
}

export default function Speaking() {
  redirect('/press')
}
