'use client'

import { useState } from 'react'
import { Card } from '@/components/Card'
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiWordpress,
  SiFigma,
  SiSketch,
  SiWebflow,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiJira,
  SiAsana,
  SiTrello,
  SiNotion,
  SiSlack,
} from 'react-icons/si'
import { Astro, ViteJS } from 'developer-icons'

interface Tool {
  name: string
  Icon: React.ComponentType<{ className?: string }>
}

interface Category {
  name: string
  tools: Tool[]
}

const categories: Category[] = [
  {
    name: 'Software Development & Engineering',
    tools: [
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'React', Icon: SiReact },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Astro', Icon: Astro },
      { name: 'Vite', Icon: ViteJS },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'CSS', Icon: SiCss3 },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
      { name: 'WordPress', Icon: SiWordpress },
    ],
  },
  {
    name: 'UX Design',
    tools: [
      { name: 'Figma', Icon: SiFigma },
      { name: 'Sketch', Icon: SiSketch },
      { name: 'Webflow', Icon: SiWebflow },
      { name: 'Photoshop', Icon: SiAdobephotoshop },
      { name: 'Illustrator', Icon: SiAdobeillustrator },
      { name: 'InDesign', Icon: SiAdobeindesign },
    ],
  },
  {
    name: 'UX Research',
    tools: [
      { name: 'Miro', Icon: SiReact },
      { name: 'Balsamiq', Icon: SiReact },
      { name: 'Lucidchart', Icon: SiReact },
      { name: 'InVision', Icon: SiReact },
      { name: 'Hotjar', Icon: SiReact },
    ],
  },
  {
    name: 'Product Management',
    tools: [
      { name: 'Jira', Icon: SiJira },
      { name: 'Asana', Icon: SiAsana },
      { name: 'Trello', Icon: SiTrello },
      { name: 'Notion', Icon: SiNotion },
    ],
  },
  {
    name: 'Delivery & Collaboration',
    tools: [
      { name: 'Slack', Icon: SiSlack },
      { name: 'Agile', Icon: SiReact },
      { name: 'Scrum', Icon: SiReact },
      { name: 'Kanban', Icon: SiReact },
    ],
  },
]

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Card as="li">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <tool.Icon className="h-6 w-6 text-zinc-800 dark:text-zinc-100" />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        {tool.name}
      </h2>
    </Card>
  )
}

export function TechnologyStack() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name)

  const active = categories.find((c) => c.name === activeCategory)

  return (
    <section className="mt-24 md:mt-28">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Full-stack web & product expertise
        </h2>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’m experienced in building and maintaining production web platforms
          using industry-standard frameworks and tools. I work end-to-end — from
          product planning and UX to implementation and delivery.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="mt-12 flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category.name === activeCategory
          return (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                isActive
                  ? 'bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-900'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
              }`}
            >
              {category.name}
            </button>
          )
        })}
      </div>

      {/* Tools grid */}
      <ul
        role="list"
        className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {active?.tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </ul>
    </section>
  )
}
