import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { ProjectList } from '@/components/ProjectList'

export const metadata: Metadata = {
  title: 'Projects',
  description: "Websites I’ve built while trying to understand how design, technology, and people fit together.",
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Websites I’ve built while trying to understand how design, technology, and people fit together"
      intro="A collection of projects spanning product design, web engineering, and decentralized systems.
Each one reflects an interest in clarity, structure, and building tools that empower people; whether through storytelling, infrastructure, or thoughtful interfaces."
      reveal
      ctaWidth="footer"
    >
      <ProjectList />
    </SimpleLayout>
  )
}
