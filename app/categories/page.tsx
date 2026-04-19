import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Logo Design Categories | Browse Services",
  description: "Explore our curated categories of AI logo design services on Fiverr. Find the perfect style for your brand from minimalist to 3D logos.",
}

const categories = [
  {
    title: "AI-Powered Logo Design",
    description: "Get a unique, AI-generated logo that perfectly represents your brand identity. Combine the power of AI with human creativity.",
    image: "/images/category-ai-logo-design.jpg",
    href: "/categories/ai-logo-design",
    badge: "Most Popular",
  },
  {
    title: "Brand Identity Packages",
    description: "Complete branding solutions including logo, business cards, letterhead, and social media assets. Everything you need to launch your brand.",
    image: "/images/category-brand-identity.jpg",
    href: "/categories/brand-identity",
    badge: "Best Value",
  },
  {
    title: "Minimalist Logo Design",
    description: "Clean, modern logos that make a lasting impression with simplicity. Perfect for tech startups and modern brands.",
    image: "/images/category-minimalist.jpg",
    href: "/categories/minimalist",
  },
  {
    title: "3D Logo Design",
    description: "Eye-catching 3D logos that stand out and add depth to your brand. Great for gaming, tech, and entertainment companies.",
    image: "/images/category-3d-logos.jpg",
    href: "/categories/3d-logos",
  },
  {
    title: "Logo Animation",
    description: "Bring your logo to life with professional animations for videos, presentations, and social media content.",
    image: "/images/category-logo-animation.jpg",
    href: "/categories/logo-animation",
    badge: "Trending",
  },
  {
    title: "Logo Redesign",
    description: "Modernize your existing logo while keeping your brand recognition intact. Refresh your brand for the digital age.",
    image: "/images/category-logo-redesign.jpg",
    href: "/categories/logo-redesign",
  },
  {
    title: "Mascot Logo Design",
    description: "Create memorable mascot logos that bring personality to your brand. Perfect for sports teams and gaming brands.",
    image: "/images/category-mascot-logos.jpg",
    href: "/categories/mascot-logos",
  },
  {
    title: "Vintage & Retro Logos",
    description: "Classic designs with a nostalgic feel. Perfect for restaurants, breweries, and heritage brands.",
    image: "/images/category-vintage-logos.jpg",
    href: "/categories/vintage-logos",
  },
  {
    title: "Wordmark Logos",
    description: "Typography-focused logos that turn your brand name into a visual masterpiece. Clean and professional.",
    image: "/images/category-wordmark-logos.jpg",
    href: "/categories/wordmark-logos",
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Browse Logo Design Categories
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of AI logo design services. 
              Find the perfect style that matches your brand vision.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <ServiceCard key={category.title} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Not Sure Which Category to Choose?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our blog has detailed guides to help you understand different logo styles 
                and choose the right one for your business. You can also browse Fiverr 
                directly to see what designers are creating.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground hover:bg-muted transition-colors"
                >
                  Read Our Guides
                </a>
                <a
                  href="https://go.fiverr.com/visit/?bta=1128446&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsearch%252Fgigs%253Fquery%253DAI%252520logo%2526source%253Dtop-bar%2526ref_ctx_id%253Dd45683988bfa4b50b7bcc20016b0cac6%2526search_in%253Deverywhere%2526search-autocomplete-original-term%253Dai%252520logo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Browse All on Fiverr
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
