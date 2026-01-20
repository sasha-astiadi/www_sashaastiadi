import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { SpeakingList } from '@/components/SpeakingContent'

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    "I've spoken at events all around the world and been interviewed for many podcasts.",
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I've spoken at events all around the world and been interviewed for many podcasts."
      intro="One of my favorite ways to share my ideas is live on stage, where there's so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
    >
      <SpeakingList />
    </SimpleLayout>
  )
}
