import Image, { type ImageProps } from 'next/image'

import logoUdacity from '@/images/education/udacity_logo.jpeg'
import logoCode from '@/images/education/code_logo.jpeg'
import logoBLCU from '@/images/education/blcu_logo.jpeg'

function AcademicCapIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3 7.5 12 3l9 4.5-9 4.5L3 7.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M12 12v6.5M6 10.5v4.25c0 .69 2.686 2.25 6 2.25s6-1.56 6-2.25V10.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

interface EducationItem {
  institution: string
  degree: string
  logo: ImageProps['src']
  start?: string
  end?: string
  issued?: string
}

function EducationEntry({ item }: { item: EducationItem }) {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={item.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Institution</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {item.institution}
        </dd>

        <dt className="sr-only">Degree</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {item.degree}
        </dd>

        {(item.start || item.issued) && (
          <>
            <dt className="sr-only">Date</dt>
            <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
              {item.issued ? (
                <>Issued {item.issued}</>
              ) : (
                <>
                  {item.start} — {item.end}
                </>
              )}
            </dd>
          </>
        )}
      </dl>
    </li>
  )
}

export function Education() {
  const education: Array<EducationItem> = [
        {
      institution: 'Udacity',
      degree: 'Front-end Web Development Nanodegree',
      logo: logoUdacity,
      start: '2021',
      end: '2021',
    },
    {
      institution: 'CODE University of Applied Sciences',
      degree: 'Bachelor of Applied Science (BASc), Product Management',
      logo: logoCode,
      start: '2017',
      end: '2020',
    },
    {
      institution: 'Beijing Language and Culture University',
      degree: 'Bachelor of Arts (BA), Chinese Language and Literature',
      logo: logoBLCU,
      start: '2013',
      end: '2017',
    },

  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <AcademicCapIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>

      <ol className="mt-6 space-y-4">
        {education.map((item, index) => (
          <EducationEntry key={index} item={item} />
        ))}
      </ol>
    </div>
  )
}
