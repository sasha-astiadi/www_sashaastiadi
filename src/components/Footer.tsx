import Link from 'next/link'
import { newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'

import { ContainerInner, ContainerOuter } from '@/components/Container'

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
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
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
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-normal text-zinc-800 dark:text-zinc-200">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/articles">Articles</NavLink>
                  <NavLink href="/projects">Projects</NavLink>
                  <NavLink href="/speaking">Speaking</NavLink>
                  <NavLink href="/uses">Uses</NavLink>
                </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  &copy; {new Date().getFullYear()} Sasha Astiadi. All rights
                  reserved.
                </p>
              </div>
            </ContainerOuter>
          </div>
        </div>
      </ContainerOuter>
    </footer>
  )
}
