import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const FIVERR_AFFILIATE_LINK = "https://go.fiverr.com/visit/?bta=1128446&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsearch%252Fgigs%253Fquery%253DAI%252520logo%2526source%253Dtop-bar%2526ref_ctx_id%253Dd45683988bfa4b50b7bcc20016b0cac6%2526search_in%253Deverywhere%2526search-autocomplete-original-term%253Dai%252520logo"

const promptFramework = [
  {
    step: "1. Start with industry + value",
    example: '"sustainable bakery, warmth and craft"',
  },
  {
    step: "2. Specify style",
    example: '"flat, geometric, single-color, no gradients"',
  },
  {
    step: "3. Limit palette",
    example: '"monochrome or two-tone maximum"',
  },
  {
    step: "4. Define shape",
    example: '"icon-only, circular mark" or "horizontal wordmark"',
  },
  {
    step: "5. Add negative constraint",
    example: '"avoid clip-art, avoid drop shadows"',
  },
]

const benefits = [
  {
    title: "Timeless Design",
    description: "Minimalist logos remain relevant for 5+ years without looking dated",
  },
  {
    title: "Universal Scalability",
    description: "Works perfectly at any size—from app icons to billboard vinyl",
  },
  {
    title: "Professional First Impression",
    description: "Clean design signals sophistication and attention to detail",
  },
  {
    title: "Versatility",
    description: "Looks great in monochrome, on different backgrounds, and in various contexts",
  },
]

const relatedTopics = [
  {
    title: "Logo Design Trends for 2025",
    description: "The latest minimalist and geometric design trends dominating the industry.",
    href: "/blog/logo-trends-2025",
  },
  {
    title: "From Concept to Icon: Logo Design Process",
    description: "Deep dive into how professional designers create minimalist logos.",
    href: "/blog/logo-design-process",
  },
  {
    title: "How to Brief Your Designer for a Minimalist Logo",
    description: "Template and tips for communicating your minimalist vision effectively.",
    href: "/blog/how-to-brief-designer",
  },
]

export const metadata = {
  title: "Minimalist Logo Design | Clean & Timeless Branding",
  description: "Discover why minimalist logo design has grown 340% since 2020. Learn the prompt framework for creating clean, geometric logos that work everywhere.",
  keywords: "minimalist logo, clean logo design, geometric logo, simple logo design",
}

export default function MinimalistCategory() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
          <Link href="/categories" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Categories
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
              Minimalist Design
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Minimalist Logo Trend: Why Less Is More
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Search volume for minimalist logo design has grown 340% since 2020. Learn why clean, simple logos are the future of branding.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden border-b border-border">
        <img
          src="/images/category-minimalist.jpg"
          alt="Minimalist Logo Design"
          className="h-full w-full object-cover"
        />
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-12">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">340%</div>
              <p className="mt-2 text-sm text-muted-foreground">growth since 2020</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+ years</div>
              <p className="mt-2 text-sm text-muted-foreground">of brand relevance</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <p className="mt-2 text-sm text-muted-foreground">scalable at any size</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">∞</div>
              <p className="mt-2 text-sm text-muted-foreground">timeless quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Minimalist Design Dominates</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Complex logos with gradients and drop shadows break at small sizes and look dated within three years. Minimalist logos work everywhere — app icons, Slack avatars, embroidered hats, billboard vinyl. They scale perfectly from a 16px favicon to a 10-meter building sign without losing impact.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              AI tools trained on modern design data naturally tend toward minimalism when given clean prompts. Directive language like &quot;flat icon, single color, geometric&quot; or &quot;wordmark, sans-serif, clean&quot; produces outputs that align with what top creative directors are charging $5,000 to do manually.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-8">The AI Minimalist Logo Prompt Framework</h3>
            <div className="space-y-4 mb-12">
              {promptFramework.map((item, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <div className="font-bold text-foreground mb-2">{item.step}</div>
                  <code className="text-sm bg-muted px-3 py-1 rounded text-muted-foreground">{item.example}</code>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-8">Key Benefits of Minimalist Design</h3>
            <div className="grid gap-6 sm:grid-cols-2 mb-12">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground text-lg mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6">Topical Authority: The Minimalist Design Cluster</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The minimalist design category also overlaps strongly with brand identity SEO — users searching for clean logo generators are often also researching brand guidelines, Notion brand kits, and Figma logo templates. A content strategy that links these three category pages together creates a powerful internal linking cluster that signals topical authority to search engines.
            </p>

            <div className="mt-12 p-8 rounded-lg bg-primary/5 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Create Your Minimalist Logo</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Generate a clean, geometric, minimalist logo powered by AI. Perfect for startups, apps, and modern brands.
              </p>
              <a
                href={FIVERR_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Started on Fiverr
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="border-t border-border py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Explore Related Topics</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedTopics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground">{topic.description}</p>
                <div className="mt-4 flex items-center text-primary font-medium text-sm">
                  Read article
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
