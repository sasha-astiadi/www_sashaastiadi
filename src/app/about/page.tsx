import { type Metadata } from 'next'

import { ContainerOuter } from '@/components/Container'
import {
  AboutPortrait,
  AboutBio,
  AboutSocialLinks,
} from '@/components/AboutContent'
import { CTA } from '@/components/CTA'
import { RevealGroup, RevealSection } from '@/components/InteractiveReveal'

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Sasha Astiadi. Web Architect, Developer & Product Consultant.",
}

export default function About() {
  return (
    <ContainerOuter className="mt-12 sm:mt-24 sm:px-6 lg:px-0">
      <div className="relative px-2 sm:px-6 lg:px-0">
        <div className="mx-auto max-w-6xl">
          <RevealGroup>
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <RevealSection id="about-portrait">
                <AboutPortrait />
              </RevealSection>
              <RevealSection id="about-bio" className="lg:order-first lg:row-span-2">
                <AboutBio />
              </RevealSection>
              <RevealSection id="about-links">
                <AboutSocialLinks />
              </RevealSection>
            </div>
            <RevealSection id="about-cta">
              <div className="mt-12">
                <CTA />
              </div>
            </RevealSection>
          </RevealGroup>
        </div>
      </div>
    </ContainerOuter>
  )
}
