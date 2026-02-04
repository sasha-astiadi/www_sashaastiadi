import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { PressList } from '@/components/SpeakingContent'

export const metadata: Metadata = {
  title: 'Press',
  description:
    "I’ve had the chance to speak at a few events and appear on a handful of podcasts.",
}

export default function Press() {
  return (
    <SimpleLayout
      title="I’ve had the chance to speak at a few events and appear on a handful of podcasts."
      intro="Live formats are something I genuinely enjoy, especially because they leave room for dialogue, questions, and unexpected directions."
      reveal
    >
      <PressList />
    </SimpleLayout>
  )
}
