import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import dunia1Image from '@/images/press/dunia/dunia1.jpeg'
import iglive1Image from '@/images/press/iglive/iglive1.png'
import code1Image from '@/images/press/code/code1.png'
import podcast1Image from '@/images/press/podcast/podcast1.jpg'




function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="grid grid-cols-1 gap-8 gap-x-12 md:grid-cols-2 md:gap-y-12">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
  image,
  location,
  category,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
  image: string | any
  location: string
  category: string
}) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl group">
      {/* Background image */}
      {typeof image === 'string' ? (
        <img
          src={image}
          alt={`Speaking at ${event}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <img
          src={image.src || image}
          alt={`Speaking at ${event}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60 transition-opacity group-hover:bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        {/* Top */}
        <div>
          <span className="inline-block rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-wide text-white/80">
            {category}
          </span>
        </div>

        {/* Middle */}
        <div>
          <h3 className="text-xl font-semibold leading-snug text-white">
            {title}
          </h3>

          <div className="mt-3 space-y-1 text-sm text-white/70">
            <p>{event}</p>
            <p>{location}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/70">
            {description}
          </span>

          <a 
            href={href}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition group-hover:translate-x-1"
          >
            →
          </a>
        </div>
      </div>
    </div>
  )
}

export function SpeakingList() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-8 gap-x-24 md:grid-cols-2 md:gap-y-24">
        <Appearance
          href="#"
          title="From Jakarta to Berlin: My Journey into Global UX"
          description="UX careers & enterprise design"
          event="Dunia Dalam Design · Jan 2020"
          location="Jakarta, Indonesia"
          category="Conference"
          image={dunia1Image}
          cta="Watch video"
        />
        <Appearance
  href="https://www.instagram.com/p/CMHocUCs-6C/"
  title="Women in Tech: Navigating Work, Bias, and Opportunity in Germany"
  description="Gender, careers, and lived experiences as a woman in tech abroad"
  event="Instagram Live · International Women’s Day · Mar 2021"
  location="Online"
  category="Live Talk"
  image={iglive1Image}
  cta="Watch live recording"
/>
<Appearance
  href="https://www.youtube.com/watch?v=FefQ-fzO2Jw"
  title="Studying and Building a Tech Career in Berlin"
  description="International student life, tech culture, and opportunities in Berlin"
  event="YouTube Feature · CODE University of Applied Sciences · Nov 2019"
  location="Berlin, Germany"
  category="Video Feature"
  image={code1Image}
  cta="Watch video"
/>
<Appearance
  href="https://open.spotify.com/episode/7nz4w2FKasNwBizjRwVDrz?si=S7a9-h7pQOeaLH0TPBn9WA"
  title="Studying While Working at Volkswagen: A Project-Based Path into Tech"
  description="Project-based education, early industry exposure, and breaking into UX"
  event="Podcast · CODE University of Applied Sciences · 2019"
  location="Berlin, Germany"
  category="Podcast"
  image={podcast1Image}
  cta="Listen on Spotify"
/>



      </div>
    </div>
  )
}
