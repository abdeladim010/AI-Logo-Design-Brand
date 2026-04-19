'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const FIVERR_AFFILIATE_LINK = "https://go.fiverr.com/visit/?bta=1128446&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsearch%252Fgigs%253Fquery%253DAI%252520logo%2526source%253Dtop-bar%2526ref_ctx_id%253Dd45683988bfa4b50b7bcc20016b0cac6%2526search_in%253Deverywhere%2526search-autocomplete-original-term%253Dai%252520logo"

export default function ThreeDLogosCategory() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/categories" className="text-muted-foreground hover:text-foreground transition-colors">Categories</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">3D Logo Design</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Featured Category</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                  3D Logo Design Services
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Create eye-catching 3D logos that stand out and add depth to your brand. Perfect for gaming studios, tech companies, and entertainment brands that want to make a visual impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={FIVERR_AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Browse 3D Designers on Fiverr
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="/categories"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-base font-semibold text-foreground hover:bg-muted transition-colors"
                  >
                    View All Categories
                  </a>
                </div>
              </div>
              <div className="relative h-96 lg:h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/category-3d-logos.jpg"
                  alt="3D Logo Design Examples"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose 3D Logo Design */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-12">Why 3D Logo Design Stands Out</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Enhanced Visual Impact</h3>
                <p className="text-muted-foreground">3D logos create memorable visual experiences that capture attention and communicate premium brand positioning.</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Modern Aesthetic</h3>
                <p className="text-muted-foreground">Perfect for tech companies, gaming studios, and innovative startups looking to showcase cutting-edge positioning.</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0m-5.657 5.657l-.707.707M9 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Versatile Usage</h3>
                <p className="text-muted-foreground">Use 3D logos in marketing videos, presentations, websites, and promotional materials to create consistent brand presence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">What to Look for in 3D Logo Design Services</h2>
            
            <div className="space-y-4">
              {[
                { title: "High-Quality Rendering", desc: "Professional 3D rendering with realistic lighting, shadows, and material textures for polished results." },
                { title: "Multiple File Formats", desc: "Export options including PNG, MP4, GIF, and 3D files (OBJ, FBX) for various use cases." },
                { title: "Animation Capabilities", desc: "Looping animations and motion graphics integration for videos and web animations." },
                { title: "Commercial License", desc: "Full rights to use and modify your 3D logo for business purposes without restrictions." },
                { title: "Customization Options", desc: "Ability to request revisions, color changes, and design adjustments until you're satisfied." },
                { title: "Fast Turnaround", desc: "Quick delivery times (typically 3-7 days) without compromising on quality." },
              ].map((feature) => (
                <div key={feature.title} className="flex gap-4 p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best For */}
        <section className="py-16 lg:py-24 border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Industries That Benefit Most from 3D Logos</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { industry: "Gaming Studios", reason: "Immersive 3D assets that match game aesthetics and attract players" },
                { industry: "Tech Companies", reason: "Modern, innovative visual identity that communicates cutting-edge technology" },
                { industry: "Entertainment", reason: "Cinematic logos perfect for movie studios, production houses, and content creators" },
                { industry: "E-commerce", reason: "Premium branding that differentiates products in competitive marketplaces" },
                { industry: "SaaS Products", reason: "Professional, sophisticated visual identity that builds trust with B2B clients" },
                { industry: "Creative Agencies", reason: "Showcasing design capabilities and creativity to attract premium clients" },
              ].map((item) => (
                <div key={item.industry} className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-foreground text-lg mb-2">{item.industry}</h3>
                  <p className="text-muted-foreground text-sm">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Ready to Transform Your Brand with 3D?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Find talented 3D logo designers on Fiverr who can bring your vision to life with stunning visual depth and professional quality.
              </p>
              <a
                href={FIVERR_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Hire a 3D Logo Designer Now
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-12">Explore Related Logo Categories</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Logo Animation", href: "/categories/logo-animation", desc: "Bring your logo to life with motion and movement" },
                { name: "AI-Powered Design", href: "/categories/ai-logo-design", desc: "Leverage AI technology for rapid logo generation" },
                { name: "Brand Identity", href: "/categories/brand-identity", desc: "Complete brand systems beyond just logos" },
              ].map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group p-6 rounded-xl border border-border bg-card hover:bg-muted transition-colors"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{category.desc}</p>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium">
                    Learn more <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
