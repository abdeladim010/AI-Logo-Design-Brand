import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { BlogCard } from "@/components/blog-card"
import { CTASection } from "@/components/cta-section"

const services = [
  {
    title: "AI-Powered Logo Design",
    description: "Get a unique, AI-generated logo that perfectly represents your brand identity.",
    image: "/images/ai-logo-hero.jpg",
    href: "/categories/ai-logo-design",
    badge: "Popular",
  },
  {
    title: "Brand Identity Packages",
    description: "Complete branding solutions including logo, business cards, and social media assets.",
    image: "/images/blog-brand-identity.jpg",
    href: "/categories/brand-identity",
    badge: "Best Value",
  },
  {
    title: "Minimalist Logo Design",
    description: "Clean, modern logos that make a lasting impression with simplicity.",
    image: "/images/blog-ai-logo-tips.jpg",
    href: "/categories/minimalist",
  },
  {
    title: "3D Logo Design",
    description: "Eye-catching 3D logos that stand out and add depth to your brand.",
    image: "/images/blog-startup-logo.jpg",
    href: "/categories/3d-logos",
  },
  {
    title: "Logo Animation",
    description: "Bring your logo to life with professional animations for videos and presentations.",
    image: "/images/ai-logo-hero.jpg",
    href: "/categories/logo-animation",
  },
  {
    title: "Logo Redesign",
    description: "Modernize your existing logo while keeping your brand recognition intact.",
    image: "/images/blog-brand-identity.jpg",
    href: "/categories/logo-redesign",
  },
]

const blogPosts = [
  {
    title: "How AI is Revolutionizing Logo Design in 2024",
    excerpt: "Discover how artificial intelligence is changing the way businesses create their brand identities.",
    image: "/images/blog-ai-logo-tips.jpg",
    href: "/blog/ai-revolutionizing-logo-design",
    date: "April 10, 2024",
    category: "AI Trends",
    readTime: "5 min read",
  },
  {
    title: "10 Tips for Choosing the Perfect AI Logo Designer",
    excerpt: "Learn what to look for when hiring an AI logo designer on Fiverr for your business.",
    image: "/images/blog-brand-identity.jpg",
    href: "/blog/tips-choosing-ai-logo-designer",
    date: "April 8, 2024",
    category: "Guide",
    readTime: "7 min read",
  },
  {
    title: "Why Startups Are Choosing AI Logo Design Services",
    excerpt: "Explore why more startups are turning to AI-powered logo design for their branding needs.",
    image: "/images/blog-startup-logo.jpg",
    href: "/blog/startups-ai-logo-design",
    date: "April 5, 2024",
    category: "Business",
    readTime: "4 min read",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Explore AI Logo Services
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse through our curated selection of AI logo design services. 
                Find the perfect designer for your brand.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Latest from Our Blog
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Tips, guides, and insights on AI logo design
                </p>
              </div>
              <a
                href="/blog"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                View all articles →
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.title} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />

        {/* Comparison Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Choose Fiverr for AI Logo Design?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Compare the benefits of hiring AI logo designers on Fiverr
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Fiverr AI Logo</th>
                    <th className="px-6 py-4 text-center font-semibold">Traditional Agency</th>
                    <th className="px-6 py-4 text-center font-semibold">DIY Tools</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-6 py-4 font-medium text-card-foreground">Starting Price</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">$5 - $50</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">$500+</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">Free - $20/mo</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="px-6 py-4 font-medium text-card-foreground">Turnaround Time</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">24-72 hours</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">2-4 weeks</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">Instant</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-card-foreground">Custom Design</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">✓</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">✓</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">Limited</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="px-6 py-4 font-medium text-card-foreground">Revisions</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">Unlimited*</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">2-3</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-card-foreground">Human Touch</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">✓</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">✓</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              *Revision policy varies by seller. Check individual gig details.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
