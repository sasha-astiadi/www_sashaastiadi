import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.webp'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export function AboutPortrait() {
  return (
    <div className="lg:pl-20">
      <div className="max-w-xs px-2.5 lg:max-w-none">
        <Image
          src={portraitImage}
          alt=""
          sizes="(min-width: 1024px) 32rem, 20rem"
          className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
        />
      </div>
    </div>
  )
}

export function AboutBio() {
  return (
    <div className="lg:order-first lg:row-span-2">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        I'm Sasha Astiadi. Web Architect, Developer & Product Consultant.
      </h1>
      <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
        <p>
          With a strong background in UX Design and Product Management, for
          over five years, I've worked across web operations, product strategy,
          and hands-on development, helping teams design, build, and scale
          user-centric web platforms.
        </p>
        <p>
          I combine technical execution with a deep understanding of user
          behavior, informed by continuous UX research and product thinking.
          I've collaborated with global organizations including VW,
          Goethe-Institut, Audi, Mozilla, Porsche, and HERE Technologies, and
          most recently spent five years working across Web3, crypto, and cloud
          infrastructure at OurWorld and ThreeFold.
        </p>
        <p>
          Today, I work as a freelance web consultant, supporting projects
          end-to-end, from product planning and UX to production-grade frontend architecture and delivery.
        </p>
      </div>
    </div>
  )
}

export function AboutSocialLinks() {
  return (
    <div className="lg:pl-20">
      <ul role="list">
        <SocialLink href="#" icon={XIcon}>
          Follow on X
        </SocialLink>
        <SocialLink href="#" icon={InstagramIcon} className="mt-4">
          Follow on Instagram
        </SocialLink>
        <SocialLink href="#" icon={GitHubIcon} className="mt-4">
          Follow on GitHub
        </SocialLink>
        <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
          Follow on LinkedIn
        </SocialLink>
        <SocialLink
          href="mailto:sashaastiadi@gmail.com"
          icon={MailIcon}
          className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
        >
          sashaastiadi@gmail.com
        </SocialLink>
      </ul>
    </div>
  )
}
