import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const FIVERR_AFFILIATE_LINK = "https://go.fiverr.com/visit/?bta=1128446&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsearch%252Fgigs%253Fquery%253DAI%252520logo%2526source%253Dtop-bar%2526ref_ctx_id%253Dd45683988bfa4b50b7bcc20016b0cac6%2526search_in%253Deverywhere%2526search-autocomplete-original-term%253Dai%252520logo"

const tools = [
  {
    name: "Looka",
    rating: "★★★★★",
    price: "From $20 one-time",
    badge: "Best overall for brand kits",
    description: "Looka produces a full brand kit including business cards, social media assets, and favicon variants from a single logo session. SVG and EPS vector file export included.",
  },
  {
    name: "Brandmark.io",
    rating: "★★★★½",
    price: "From $25",
    badge: "Best for unique icon generation",
    description: "Specializes in unique and distinctive icon generation with deep customization options. Perfect for brands that want to stand out from the competition.",
  },
  {
    name: "Hatchful by Shopify",
    rating: "★★★★",
    price: "Free",
    badge: "Best free option for e-commerce",
    description: "Great starting point for e-commerce businesses. Completely free with solid logo generation capabilities and basic customization features.",
  },
]

const relatedPosts = [
  {
    title: "The Best AI Logo Design Tools for Small Business",
    href: "/blog/ai-logo-design-tools",
    date: "April 19, 2025",
  },
  {
    title: "How AI is Revolutionizing Logo Design in 2024",
    href: "/blog/ai-revolutionizing-logo-design",
    date: "April 10, 2024",
  },
  {
    title: "AI Logo Design vs Traditional Design: A Comparison",
    href: "/blog/ai-vs-traditional-design",
    date: "March 28, 2024",
  },
]

export const metadata = {
  title: "AI Logo Design Tools & Services | Fiverr Affiliate",
  description: "Discover the best AI logo design tools for small businesses. Compare features, pricing, and see why 73% of consumers judge brands by logo first.",
  keywords: "AI logo design, logo maker, AI logo generator, best logo tools 2025",
}

export default function AILogoDesignCategory() {
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
              AI Logo Design
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Best AI Logo Design Tools for Small Business
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Every second, a new small business is born. Here&apos;s how AI is making world-class brand identity design accessible to anyone.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden border-b border-border">
        <img
          src="/images/category-ai-logo-design.jpg"
          alt="AI Logo Design Tools"
          className="h-full w-full object-cover"
        />
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-12">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">73%</div>
              <p className="mt-2 text-sm text-muted-foreground">of consumers judge brands by logo first</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$0–$30</div>
              <p className="mt-2 text-sm text-muted-foreground">avg AI logo cost vs $300–$2,500 designer</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3 min</div>
              <p className="mt-2 text-sm text-muted-foreground">to generate a pro-grade AI logo</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">11M+</div>
              <p className="mt-2 text-sm text-muted-foreground">monthly searches: &quot;logo maker&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why AI Logo Design Is the Smartest Move for Small Business</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Small business branding used to be a choice between hiring a freelancer for $800 or buying a generic Canva template that half your competitors also use. AI logo design tools have collapsed that gap completely. Today, platforms powered by large language models and generative image AI can produce logos with real brand identity depth — custom iconography, scalable vector output, and typography that actually fits your niche.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Top AI Logo Design Tools: Head-to-Head</h3>
            <p className="text-lg text-muted-foreground mb-8">
              We tested 14 platforms across four criteria: output quality, vector export options, customization depth, and pricing for solo founders and SMBs. Here are the three that consistently rose to the top.
            </p>

            <div className="space-y-6 mb-8">
              {tools.map((tool) => (
                <div key={tool.name} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{tool.name}</h4>
                      <span className="inline-block mt-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {tool.badge}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg text-yellow-500 font-semibold">{tool.rating}</div>
                      <div className="text-sm font-semibold text-foreground mt-1">{tool.price}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4">{tool.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Key Features to Look For</h3>
            <ul className="space-y-3 mb-8 text-lg text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>SVG and EPS vector file export (essential for print scalability)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Full commercial license with one-time payment</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Color palette variations including dark/light mode versions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Font pairing recommendations aligned to brand tone</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>No-watermark previews before purchase</span>
              </li>
            </ul>

            <div className="mt-12 p-8 rounded-lg bg-primary/5 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Create Your AI Logo?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Explore our full reviews of every AI logo platform, sorted by use case and budget. Find the perfect tool for your business today.
              </p>
              <a
                href={FIVERR_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Explore AI Logo Tools on Fiverr
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="border-t border-border py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
          <div className="space-y-4">
            {relatedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="block p-4 rounded-lg border border-border hover:border-primary hover:bg-card transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <svg className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
