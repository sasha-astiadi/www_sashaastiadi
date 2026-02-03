import { Card } from '@/components/Card'
import { Section } from '@/components/Section'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export function UsesList() {
  return (
    <div className="space-y-20">
      {/* WORKSTATION */}
      <ToolsSection title="Workstation">
        <Tool title='16" MacBook Pro, M1 Max, 64GB RAM (2021)'>
          I upgraded from an Intel-based 16" MacBook Pro and the difference was
          immediate and dramatic. Silent under load, incredibly fast, and
          reliable even during heavy builds, simulations, and parallel dev
          workflows.
        </Tool>

        <Tool title="Apple Pro Display XDR (Standard Glass)">
          The only display I’ve used that truly feels future-proof. The screen
          real estate and pixel density make complex interfaces, timelines, and
          dense layouts far easier to reason about.
        </Tool>

        <Tool title="IBM Model M SSK Industrial Keyboard">
          Overbuilt in the best possible way. I collect and maintain these
          because nothing else comes close in terms of feel, durability, and
          typing confidence.
        </Tool>

        <Tool title="Apple Magic Trackpad">
          Multi-touch gestures feel second nature at this point. It makes
          navigating large design files and complex UIs feel fluid and almost
          playful.
        </Tool>

        <Tool title="Herman Miller Aeron Chair">
          If I’m going to sit for long stretches of deep work, I want something
          that survives bad posture days without punishing me later.
        </Tool>
      </ToolsSection>

      {/* SOFTWARE DEVELOPMENT */}
      <ToolsSection title="Software Development & Engineering">
        <Tool title="TypeScript / JavaScript">
          My default language stack for building maintainable, scalable web
          applications. Strong typing where it matters, flexibility where it
          helps.
        </Tool>

        <Tool title="React, Next.js, Astro">
          React for rich client-side interactions, Next.js for full-stack
          production apps, and Astro when performance, content, and simplicity
          are the priority.
        </Tool>

        <Tool title="Vite & Node.js">
          Vite for fast iteration and instant feedback loops, Node.js as the
          backbone for tooling, APIs, and build pipelines.
        </Tool>

        <Tool title="CSS & Tailwind CSS">
          I use Tailwind for speed and consistency, paired with solid CSS
          fundamentals when custom layout, animation, or fine-grained control
          is required.
        </Tool>

        <Tool title="WordPress, Netlify, Vercel">
          WordPress when clients need editorial flexibility, Netlify and Vercel
          for modern hosting, previews, and CI-driven deployments.
        </Tool>
      </ToolsSection>

      {/* UX DESIGN */}
      <ToolsSection title="UX Design">
        <Tool title="Figma">
          My primary design environment — from wireframes to polished UI and
          collaborative design systems. It’s also where most product thinking
          happens early on.
        </Tool>

        <Tool title="Sketch & Webflow">
          Sketch for legacy projects and asset-heavy workflows. Webflow when
          visual iteration and rapid prototyping need to move fast without
          engineering overhead.
        </Tool>

        <Tool title="Adobe Photoshop, Illustrator, InDesign">
          Used when precision matters — image editing, vector work, brand
          assets, and long-form layout that goes beyond interface design.
        </Tool>
      </ToolsSection>

      {/* UX RESEARCH */}
      <ToolsSection title="UX Research">
        <Tool title="Miro">
          My go-to tool for mapping user journeys, running workshops, and
          turning messy research into structured insights.
        </Tool>

        <Tool title="Balsamiq, Axure, InVision">
          Low- to mid-fidelity prototyping tools for quickly validating ideas
          before committing to higher-cost design or development work.
        </Tool>

        <Tool title="Hotjar">
          Essential for understanding real user behavior — heatmaps, recordings,
          and feedback loops that challenge assumptions.
        </Tool>
      </ToolsSection>

      {/* PRODUCT MANAGEMENT */}
      <ToolsSection title="Product Management">
        <Tool title="Jira, Asana, Trello">
          I adapt the tool to the team, not the other way around. These cover
          everything from structured agile delivery to lightweight planning.
        </Tool>

        <Tool title="Notion">
          A flexible knowledge base for product docs, specs, roadmaps, and
          internal alignment — especially useful across distributed teams.
        </Tool>
      </ToolsSection>

      {/* DELIVERY & COLLABORATION */}
      <ToolsSection title="Delivery & Collaboration">
        <Tool title="Git, GitHub, Gitea, Forgejo">
          Version control is non-negotiable. I’m comfortable across GitHub and
          self-hosted alternatives, depending on project needs and values.
        </Tool>

        <Tool title="Slack">
          The default communication layer for most teams I work with — useful
          when paired with clear boundaries and async-friendly workflows.
        </Tool>
      </ToolsSection>
    </div>
  )
}
