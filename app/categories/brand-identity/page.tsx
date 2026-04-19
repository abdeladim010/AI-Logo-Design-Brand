import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const FIVERR_AFFILIATE_LINK = "https://go.fiverr.com/visit/?bta=1128446&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsearch%252Fgigs%253Fquery%253DAI%252520logo%2526source%253Dtop-bar%2526ref_ctx_id%253Dd45683988bfa4b50b7bcc20016b0cac6%2526search_in%253Deverywhere%2526search-autocomplete-original-term%253Dai%252520logo"

const systemComponents = [
  {
    name: "Logo",
    description: "The core visual mark that represents your brand identity",
  },
  {
    name: "Color Palette",
    description: "Hex codes and RGB values for primary, secondary, and accent colors",
  },
  {
    name: "Typography",
    description: "Font family recommendations and sizing guidelines for all text elements",
  },
  {
    name: "Iconography",
    description: "Complementary icon sets that align with your logo style and values",
  },
  {
    name: "Business Cards",
    description: "Logo application on standard business card formats",
  },
  {
    name: "Social Media Assets",
    description: "Profile pictures, cover photos, and post templates for major platforms",
  },
]

const relatedArticles = [
  {
    title: "Why Consistency Increases Revenue by 23%",
    description: "For service businesses, coaches, and consultants — where trust is the primary sales driver — brand identity consistency directly impacts conversion rates.",
    href: "/blog/brand-consistency",
  },
  {
    title: "How to Use Your Brand Guidelines",
    description: "Learn how to leverage your brand identity system across all marketing channels and touchpoints.",
    href: "/blog/brand-guidelines-how-to",
  },
  {
    title: "The Psychology of Color in Branding",
    description: "Understanding how colors influence consumer perception and how to choose the right palette for your brand.",
    href: "/blog/color-psychology-branding",
  },
]

export const metadata = {
  title: "Brand Identity Design | AI-Powered Complete Branding Systems",
  description: "Discover how AI-powered brand identity systems create complete visual languages. Logo, color palette, typography, and more — everything a business needs for cohesive branding.",
  keywords: "brand identity, visual identity, brand guidelines, branding system, logo design",
}

export default function BrandIdentityCategory() {
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
              Brand Identity
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            AI Logo Design as a Brand Identity System
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            A logo is not a brand. Discover how to build a complete visual language that ensures consistency across every touchpoint.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden border-b border-border">
        <img
          src="/images/category-brand-identity.jpg"
          alt="Brand Identity System"
          className="h-full w-full object-cover"
        />
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Complete Brand Identity System</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A logo is not a brand. This is the mistake most small business owners make — they get the icon, slap it on a website, and call it done. Brand identity is the complete visual language: logo, color system, typography, iconography, and the emotional consistency across every touchpoint.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              The best AI logo design tools understand this. Platforms like Looka and Tailor Brands generate brand identity systems, not just marks. You get a primary logo, a secondary badge version, a wordmark, color hex codes, font files, and a full usage guide — everything an early-stage business needs to look cohesive from day one.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-8">What's Included in a Complete Brand System</h3>
            <div className="grid gap-6 sm:grid-cols-2 mb-12">
              {systemComponents.map((component) => (
                <div key={component.name} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground text-lg mb-2">{component.name}</h4>
                  <p className="text-muted-foreground">{component.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6">Why Brand Consistency Matters</h3>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-primary min-w-fit">23%</div>
                <div>
                  <p className="text-lg font-semibold text-foreground mb-2">Revenue Increase from Consistency</p>
                  <p className="text-muted-foreground">
                    Studies show that consistent brand presentation across all channels increases revenue by up to 23%. Your AI-generated logo is the foundation of that consistency, but only if it's part of a coherent system.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              For service businesses, coaches, and consultants — where trust is the primary sales driver — brand identity consistency directly impacts conversion rates. A cohesive visual identity signals professionalism, reliability, and attention to detail. When customers see the same logo, colors, and typography across your website, social media, email, and business cards, they develop confidence in your brand.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Semantic Keywords That Drive Traffic</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Pages targeting brand-identity should include semantically related terms to establish topical authority:
            </p>
            <ul className="space-y-2 mb-8 text-lg text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Visual identity and visual language</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Brand guidelines and brand standards</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Brand consistency and cohesive branding</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Color palette generator and typography system</span>
              </li>
            </ul>

            <div className="mt-12 p-8 rounded-lg bg-primary/5 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Build Your Brand Identity Today</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Get a complete brand identity system with logo, color palette, typography, and brand guidelines — all in one place.
              </p>
              <a
                href={FIVERR_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Explore Brand Identity Services
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="border-t border-border py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Related Topics</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground">{article.description}</p>
                <div className="mt-4 flex items-center text-primary font-medium text-sm">
                  Learn more
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
