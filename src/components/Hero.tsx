import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export function Hero() {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="lg:mt-24 mt-12 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Hi, I'm Sasha. I design and build digital products that scale.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I help teams design and build clear, scalable web platforms, drawing
          on over five years of experience across UX, product thinking, web
          architecture, and implementation.
        </p>
        <div className="mt-6 flex gap-6">
          <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
          <SocialLink
            href="#"
            aria-label="Follow on Instagram"
            icon={InstagramIcon}
          />
          <SocialLink
            href="#"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <SocialLink
            href="#"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
        </div>
      </div>
    </Container>
  )
}
