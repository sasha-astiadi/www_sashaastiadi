import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import {
  AboutPortrait,
  AboutBio,
  AboutSocialLinks,
} from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Sasha Astiadi. Web Architect, Developer & Product Consultant.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <AboutPortrait />
        <AboutBio />
        <AboutSocialLinks />
      </div>
    </Container>
  )
}
