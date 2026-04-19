import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | AI Logo Design Tips & Guides",
  description: "Explore our blog for expert tips, guides, and insights on AI logo design. Learn how to create stunning brand identities with AI-powered tools.",
}

const blogPosts = [
  {
    title: "How AI is Revolutionizing Logo Design in 2024",
    excerpt: "Discover how artificial intelligence is changing the way businesses create their brand identities and what this means for the future of design.",
    image: "/images/blog-ai-revolution.jpg",
    href: "/blog/ai-revolutionizing-logo-design",
    date: "April 10, 2024",
    category: "AI Trends",
    readTime: "5 min read",
  },
  {
    title: "10 Tips for Choosing the Perfect AI Logo Designer",
    excerpt: "Learn what to look for when hiring an AI logo designer on Fiverr. From portfolio review to communication skills, we cover everything.",
    image: "/images/blog-choosing-designer.jpg",
    href: "/blog/tips-choosing-ai-logo-designer",
    date: "April 8, 2024",
    category: "Guide",
    readTime: "7 min read",
  },
  {
    title: "Why Startups Are Choosing AI Logo Design Services",
    excerpt: "Explore why more startups are turning to AI-powered logo design for their branding needs and how it gives them a competitive edge.",
    image: "/images/blog-startup-branding.jpg",
    href: "/blog/startups-ai-logo-design",
    date: "April 5, 2024",
    category: "Business",
    readTime: "4 min read",
  },
  {
    title: "The Complete Guide to Brand Identity for Small Businesses",
    excerpt: "Everything you need to know about creating a cohesive brand identity, from logo design to color psychology and typography.",
    image: "/images/blog-brand-identity.jpg",
    href: "/blog/brand-identity-guide",
    date: "April 2, 2024",
    category: "Branding",
    readTime: "10 min read",
  },
  {
    title: "AI Logo Design vs Traditional Design: A Comparison",
    excerpt: "We compare AI-powered logo design with traditional design methods to help you decide which approach is right for your business.",
    image: "/images/blog-comparison.jpg",
    href: "/blog/ai-vs-traditional-design",
    date: "March 28, 2024",
    category: "Comparison",
    readTime: "6 min read",
  },
  {
    title: "How to Brief Your Logo Designer for Best Results",
    excerpt: "Learn how to communicate your vision effectively to get the perfect logo design. Includes a downloadable brief template.",
    image: "/images/blog-ai-logo-tips.jpg",
    href: "/blog/how-to-brief-designer",
    date: "March 25, 2024",
    category: "Tips",
    readTime: "5 min read",
  },
]

const categories = [
  { name: "All", count: 12 },
  { name: "AI Trends", count: 4 },
  { name: "Guide", count: 3 },
  { name: "Business", count: 2 },
  { name: "Branding", count: 2 },
  { name: "Tips", count: 1 },
]

const FIVERR_AFFILIATE_LINK = "https://go.fiverr.com/visit/?bta=1128446&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsearch%252Fgigs%253Fquery%253DAI%252520logo%2526source%253Dtop-bar%2526ref_ctx_id%253Dd45683988bfa4b50b7bcc20016b0cac6%2526search_in%253Deverywhere%2526search-autocomplete-original-term%253Dai%252520logo"

const services = [
  {
    title: "AI-Powered Logo Design",
    description: "Get a unique, AI-generated logo that perfectly represents your brand identity.",
    image: "/images/service-ai-logo.jpg",
    badge: "Popular",
  },
  {
    title: "Brand Identity Packages",
    description: "Complete branding solutions including logo, business cards, and social media assets.",
    image: "/images/service-brand-identity.jpg",
    badge: "Best Value",
  },
  {
    title: "Minimalist Logo Design",
    description: "Clean, modern logos that make a lasting impression with simplicity.",
    image: "/images/service-minimalist.jpg",
    badge: null,
  },
  {
    title: "3D Logo Design",
    description: "Eye-catching 3D logos that stand out and add depth to your brand.",
    image: "/images/service-3d-logo.jpg",
    badge: null,
  },
  {
    title: "Logo Animation",
    description: "Bring your logo to life with professional animations for videos and presentations.",
    image: "/images/service-animation.jpg",
    badge: null,
  },
  {
    title: "Logo Redesign",
    description: "Modernize your existing logo while keeping your brand recognition intact.",
    image: "/images/service-redesign.jpg",
    badge: null,
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              AI Logo Design Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert tips, guides, and insights to help you create the perfect 
              brand identity for your business.
            </p>
          </div>
        </section>

        {/* AI Logo Services Section */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Explore AI Logo Services
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse through our curated selection of AI logo design services. Find the perfect designer for your brand.
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <a
                  key={service.title}
                  href={FIVERR_AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:border-primary/50"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {service.badge && (
                      <span className="absolute top-3 right-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-primary font-medium text-sm">
                      Learn more
                      <svg
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <a
                href={FIVERR_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View All Services on Fiverr
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-wrap gap-2 py-4">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.title} {...post} />
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="mt-12 text-center">
              <button className="px-8 py-3 rounded-lg border border-border bg-card text-card-foreground hover:bg-muted transition-colors font-medium">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Stay Updated
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get the latest AI logo design tips and trends delivered to your inbox.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
