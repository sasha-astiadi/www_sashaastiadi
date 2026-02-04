import Link from 'next/link'
import { newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'

import { ContainerOuter } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-600 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

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

export function Footer() {
  return (
    <footer className="mt-12 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-12 dark:border-zinc-700/40">
          <div
            className={`mx-2 overflow-hidden rounded-xl py-8 sm:mx-0 ${newHeroGradientLight} ${newHeroGradientDark}`}
          >
            <ContainerOuter>
              <div className="flex flex-col items-center justify-center gap-3 text-center">
                <Link href="/" aria-label="Home" className="inline-flex">
                  <img
                    src="/images/sasha_logo_dark.svg"
                    alt="Sasha Astiadi"
                    className="h-9 w-auto dark:hidden"
                  />
                  <img
                    src="/images/sasha_logo_light.svg"
                    alt="Sasha Astiadi"
                    className="hidden h-9 w-auto dark:block"
                  />
                </Link>

                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-normal text-zinc-800 dark:text-zinc-200">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/articles">Articles</NavLink>
                  <NavLink href="/projects">Projects</NavLink>
                  <NavLink href="/speaking">Press</NavLink>
                </nav>

                <div className="flex justify-center gap-6">
                  <SocialLink
                    href="https://x.com/sashatigresa"
                    aria-label="Follow on X"
                    icon={XIcon}
                  />
                  <SocialLink
                    href="https://www.instagram.com/sashatigresa"
                    aria-label="Follow on Instagram"
                    icon={InstagramIcon}
                  />
                  <SocialLink
                    href="https://github.com/sasha-astiadi"
                    aria-label="Follow on GitHub"
                    icon={GitHubIcon}
                  />
                  <SocialLink
                    href="https://www.linkedin.com/in/sastiadi/"
                    aria-label="Follow on LinkedIn"
                    icon={LinkedInIcon}
                  />
                </div>

                <p className=" mx-12 sm:mx-0 text-sm text-zinc-400 dark:text-zinc-500">
                  &copy; 2026 Sasha Astiadi — Sasha Studio. Headshots by Toby Strauss for <a href="https://www.toracrafts.com" className="underline hover:text-zinc-300 dark:hover:text-zinc-400" target="_blank" rel="noopener noreferrer">Tora Crafts</a>.
                </p>
              </div>
            </ContainerOuter>
          </div>
        </div>
      </ContainerOuter>
    </footer>
  )
}
