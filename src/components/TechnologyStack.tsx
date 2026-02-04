'use client'

import { useState } from 'react'
import { Card } from '@/components/Card'
import { Eyebrow, libreBodoniItalic } from '@/components/ui/Texts'
import { FadeWord } from '@/components/ui/fade-word'
import { useRevealIsActive } from '@/components/InteractiveReveal'
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
  SiNetlify,
  SiVercel,
} from 'react-icons/si'

function AstroIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" className={`h-10 w-10 ${className}`}>
      <path d="M21.4916 33.2936C20.3543 32.2612 20.0222 30.092 20.4961 28.5204C21.3178 29.5112 22.4562 29.8251 23.6354 30.0023C25.4559 30.2757 27.2438 30.1734 28.9349 29.3472C29.1283 29.2526 29.3071 29.1268 29.5185 28.9994C29.6772 29.4566 29.7185 29.918 29.6631 30.3878C29.5283 31.5317 28.955 32.4154 28.0431 33.0852C27.6785 33.3532 27.2927 33.5927 26.9161 33.8453C25.7591 34.6218 25.4461 35.5323 25.8809 36.8566C25.8912 36.889 25.9004 36.9213 25.9238 37C25.3331 36.7374 24.9016 36.3552 24.5728 35.8526C24.2256 35.3223 24.0604 34.7355 24.0517 34.1007C24.0474 33.7917 24.0474 33.48 24.0055 33.1755C23.9034 32.4329 23.5523 32.1004 22.891 32.0813C22.2122 32.0616 21.6753 32.4783 21.533 33.1345C21.5221 33.1848 21.5063 33.2345 21.4906 33.293L21.4916 33.2936Z" fill="currentColor"/>
      <path d="M15 28.2586C15 28.2586 18.368 26.6294 21.7454 26.6294L24.2918 18.8038C24.3871 18.4254 24.6655 18.1682 24.9797 18.1682C25.294 18.1682 25.5724 18.4254 25.6677 18.8038L28.2141 26.6294C32.2141 26.6294 34.9595 28.2586 34.9595 28.2586C34.9595 28.2586 29.2387 12.7833 29.2275 12.7522C29.0633 12.2947 28.7861 12 28.4124 12H21.5476C21.1739 12 20.9079 12.2947 20.7326 12.7522C20.7202 12.7827 15 28.2586 15 28.2586Z" fill="currentColor"/>
    </svg>
  )
}

function ViteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" className={`h-10 w-10 ${className}`}>
      <path d="M29.5561 13.0074L18.9656 15.041C18.7915 15.0744 18.6627 15.2189 18.6522 15.3924L18.0007 26.1747C17.9854 26.4287 18.2234 26.6258 18.4763 26.5686L21.4249 25.9018C21.7007 25.8394 21.95 26.0775 21.8933 26.3494L21.0173 30.5531C20.9584 30.8361 21.2294 31.078 21.5114 30.9941L23.3325 30.4518C23.6149 30.3678 23.8861 30.6105 23.8264 30.8936L22.4343 37.4967C22.3472 37.9098 22.9078 38.135 23.1416 37.7809L23.2978 37.5444L31.9275 20.6672C32.072 20.3847 31.8228 20.0624 31.5061 20.1223L28.4711 20.6964C28.1859 20.7502 27.9432 20.49 28.0237 20.2165L30.0046 13.487C30.0852 13.2131 29.8417 12.9525 29.5561 13.0074Z" fill="currentColor"/>
    </svg>
  )
}

function MiroIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" className={`h-10 w-10 ${className}`}>
      <path d="M31.9472 11.14C35.763 11.14 38.86 14.2371 38.86 18.0528V31.8772C38.86 35.693 35.763 38.79 31.9472 38.79H18.1227C14.307 38.79 11.21 35.693 11.21 31.8772V18.0528C11.21 14.2382 14.307 11.14 18.1227 11.14H31.9472ZM19.5566 22.1321L17.0483 33.5664H19.5566L24.3653 21.3177L22.065 33.5664H24.5733L29.174 20.4985L27.0817 33.5664H29.5901L34.1908 19.2763L29.5901 16.4204V16.4144H27.0817L29.174 20.0896L24.5733 16.4144H22.065L24.3653 20.9028L19.5566 16.4144H17.0483L19.5566 22.1321Z" fill="currentColor"/>
    </svg>
  )
}

function BalsamiqIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" className={`h-10 w-10 ${className}`}>
      <path d="M28.2961 28.9068L35.2524 24.4138C37.2066 23.0229 38.6077 21.8658 37.7351 20.3394C36.9854 19.0469 35.3876 19.3177 32.6715 20.1794C30.1642 20.9795 26.8458 22.1489 24.8056 22.8998C24.5598 22.9859 24.3877 22.6536 24.6089 22.5059C27.067 20.8441 29.8815 18.8253 31.3441 17.5205C32.2905 16.6835 32.4134 15.6618 31.9095 15.0463C31.4793 14.517 30.9139 13.9754 28.2346 14.8494C26.305 15.4895 23.8469 16.5235 21.6347 17.4221C21.4011 17.5205 21.2168 17.2128 21.4134 17.0528C21.9419 16.6096 22.9743 15.8218 23.5397 15.2187C24.4369 14.2708 24.4492 13.3476 23.9944 12.7445C23.7609 12.4244 23.2324 11.8951 21.7453 12.0182C20.5162 12.1167 19.0905 12.3752 17.1732 12.9045C15.7721 13.2984 15.9688 15.4772 17.9598 15.1202C18.4637 15.034 19.1889 14.8863 19.7174 14.7755C19.9386 14.7263 20.0861 15.0217 19.9017 15.1571C18.5743 16.1911 17.0012 17.459 16.276 18.1114C15.342 18.9484 14.9487 19.847 15.5755 20.6841C16.2269 21.5334 17.5051 21.2749 19.0414 20.8318C19.9877 20.561 21.4626 20.0563 22.5196 19.6993C22.7654 19.6132 22.9252 19.9578 22.7039 20.0932C20.762 21.3242 17.4436 23.3798 15.7476 24.5862C13.7934 25.9771 12.3923 27.1342 13.2649 28.6606C14.0146 29.9531 15.6124 29.6823 18.3285 28.8206C20.8358 28.0205 24.1542 26.8511 26.1944 26.1002C26.4402 26.0141 26.6123 26.3464 26.3911 26.4941C23.933 28.1559 21.1185 30.1747 19.6559 31.4795C18.7095 32.3165 18.5866 33.3382 19.0905 33.9537C19.5207 34.483 20.0861 35.0246 22.7654 34.1506C24.695 33.5105 27.1531 32.4765 29.3653 31.5779C29.5989 31.4795 29.7832 31.7872 29.5866 31.9472C29.0581 32.3904 28.0257 33.1782 27.4603 33.7813C26.5631 34.7292 26.5508 35.6524 27.0056 36.2555C27.2391 36.5756 27.7676 37.1049 29.2547 36.9818C30.4838 36.8833 31.9095 36.6248 33.8268 36.0955C35.2279 35.7016 35.0312 33.5228 33.0402 33.8798C32.5363 33.966 31.8111 34.1137 31.2826 34.2245C31.0614 34.2737 30.9139 33.9783 31.0983 33.8429C32.4257 32.7966 33.9865 31.5287 34.7117 30.8763C35.6457 30.0393 36.039 29.1407 35.4122 28.3036C34.7608 27.4543 33.4826 27.7128 31.9463 28.1559C31 28.4267 29.5251 28.9314 28.4681 29.2884C28.2469 29.3869 28.0748 29.0422 28.2961 28.9068Z" fill="currentColor"/>
    </svg>
  )
}

function HotjarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" className={`h-10 w-10 ${className}`}>
      <path d="M23.2487 22.2841C26.1476 20.6966 30.1508 18.4879 30.1508 12H25.3194C25.3194 15.5891 23.5938 16.5554 20.902 18.0738C18.0032 19.6613 14 21.8699 14 28.2888H18.8314C18.8314 24.6998 20.5569 23.7335 23.2487 22.2841Z" fill="currentColor"/>
      <path d="M31.5313 20.7655C31.5313 24.3546 29.8058 25.3209 27.114 26.8393C24.2151 28.4268 20.2119 30.6354 20.2119 37.1234H25.0433C25.0433 33.5343 26.7689 32.568 29.4607 31.0496C32.3595 29.4621 36.3627 27.2534 36.3627 20.7655H31.5313Z" fill="currentColor"/>
    </svg>
  )
}

function InVisionIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" className={`h-10 w-10 ${className}`}>
      <path d="M16.5395 17.2211C17.9828 17.2033 19.1233 16.0094 19.1054 14.5661C19.0876 13.1228 17.8938 11.9824 16.4504 12.0002C15.0249 12.018 13.8845 13.1941 13.8845 14.6196C13.8845 16.0629 15.0606 17.2389 16.5395 17.2211C16.5217 17.2211 16.5217 17.2211 16.5395 17.2211Z" fill="currentColor"/>
      <path d="M11.0335 31.2089C10.8909 31.8504 10.8018 32.5097 10.8018 33.169C10.8018 35.4676 12.0492 37 14.7042 37C16.8959 37 18.6778 35.6992 19.9607 33.5966L19.1767 36.7327H23.5423L26.0369 26.7364C26.6606 24.2061 27.8723 22.8875 29.7076 22.8875C31.1509 22.8875 32.0419 23.7784 32.0419 25.2574C32.0419 25.7385 31.9884 26.2018 31.8459 26.6651L30.5629 31.2623C30.3847 31.9038 30.2956 32.5453 30.2956 33.2046C30.2956 35.3785 31.5786 36.9822 34.2692 36.9822C36.5679 36.9822 38.4032 35.5032 39.4189 31.9573L37.7083 31.298C36.853 33.6679 36.1046 34.0955 35.5344 34.0955C34.9642 34.0955 34.6434 33.7035 34.6434 32.9195C34.6613 32.5097 34.7325 32.1176 34.8394 31.7256L36.0868 27.2531C36.3719 26.3265 36.5144 25.3821 36.5144 24.4199C36.5144 21.07 34.4831 19.3237 32.0419 19.3237C29.7433 19.3237 27.409 21.3907 26.2329 23.5824L27.0883 19.6623H20.424L19.4974 23.1191H22.6157L20.6913 30.7991C19.1767 34.149 16.4148 34.2024 16.0584 34.1312C15.4882 34.0064 15.1318 33.7926 15.1318 33.0442C15.1496 32.4384 15.2387 31.8504 15.3991 31.2623L18.3214 19.6623H10.9266L10 23.1191H13.0827L11.0335 31.2089Z" fill="currentColor"/>
    </svg>
  )
}

function AxureIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" className={`h-10 w-10 ${className}`}>
      <path fillRule="evenodd" clipRule="evenodd" d="M34.8796 12.6631C34.6784 12.2653 34.276 12 33.7394 12H31.7607C31.1906 12 30.7546 12.2321 30.5534 12.63L27.6357 16.8408L30.1845 20.2891L34.6449 13.9894C35.1479 13.3926 34.9467 12.8621 34.8796 12.6631Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.4864 12.5968C19.0169 12 18.4467 12 18.2455 12H16.3339C15.8309 12 15.4284 12.2321 15.1937 12.63C14.9925 13.0279 15.026 13.492 15.3278 13.9562L22.4711 23.7706L14.2547 35.0769C13.9528 35.508 13.9193 35.9721 14.1541 36.37C14.3553 36.7679 14.7577 37 15.2608 37H17.2394C17.7425 37 18.1784 36.7347 18.4132 36.3369L27.6022 23.8037L19.4864 12.5968Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M35.8523 35.4085L30.8889 28.6777L28.709 31.6618L32.6328 36.8674L32.7334 36.9005C32.9011 36.9669 33.0687 37 33.2364 37H34.9133C35.3157 37 35.6511 36.8342 35.8523 36.5027C36.0535 36.2043 36.0535 35.8064 35.8523 35.4085Z" fill="currentColor"/>
    </svg>
  )
}

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
      { name: 'Astro', Icon: AstroIcon },
      { name: 'Vite', Icon: ViteIcon },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'CSS', Icon: SiCss3 },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
      { name: 'WordPress', Icon: SiWordpress },
      { name: 'Netlify', Icon: SiNetlify },
      { name: 'Vercel', Icon: SiVercel },
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
      { name: 'Miro', Icon: MiroIcon },
      { name: 'Balsamiq', Icon: BalsamiqIcon },
      { name: 'Axure', Icon: AxureIcon },
      { name: 'InVision', Icon: InVisionIcon },
      { name: 'Hotjar', Icon: HotjarIcon },
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
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
      { name: 'Gitea', Icon: SiGit },
      { name: 'Forgejo', Icon: SiGit },
    ],
  },
]

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Card as="li">
      <div className="flex flex-col items-center text-center">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <tool.Icon className="h-6 w-6 text-zinc-800 dark:text-zinc-100" />
        </div>
        <h2 className="mt-2 text-base font-normal text-zinc-800 dark:text-zinc-100">
          {tool.name}
        </h2>
      </div>
    </Card>
  )
}

export function TechnologyStack() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name)

  const isActive = useRevealIsActive('tech')

  const active = categories.find((c) => c.name === activeCategory)

  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>TECHNOLOGY STACK</Eyebrow>
        <h2 className="text-4xl font-normal tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Full-stack Web{' '}
          <FadeWord
            word="Expertise"
            className={libreBodoniItalic}
            playTrigger={isActive}
          />
        </h2>
      </div>

      {/* Filter tabs */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
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
        className="mx-auto mt-12 grid max-w-5xl grid-cols-3 justify-items-center gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16 lg:grid-cols-4"
      >
        {active?.tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </ul>
    </section>
  )
}
