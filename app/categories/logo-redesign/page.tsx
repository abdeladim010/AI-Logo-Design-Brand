'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const FIVERR_AFFILIATE_LINK = "https://go.fiverr.com/visit/?bta=1128446&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsearch%252Fgigs%253Fquery%253DAI%252520logo%2526source%253Dtop-bar%2526ref_ctx_id%253Dd45683988bfa4b50b7bcc20016b0cac6%2526search_in%253Deverywhere%2526search-autocomplete-original-term%253Dai%252520logo"

export default function LogoRedesignCategory() {
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
              <span className="text-foreground font-medium">Logo Redesign</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Brand Refresh</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                  Logo Redesign Services
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Modernize your existing logo while keeping your brand recognition intact. A professional redesign can breathe new life into your brand for the digital age.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={FIVERR_AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Find Redesign Experts
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
                  src="/images/category-logo-redesign.jpg"
                  alt="Logo Redesign Examples"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Redesign */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-12">When Should You Redesign Your Logo?</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Outdated Design</h3>
                <p className="text-muted-foreground">Your logo has gradients, drop shadows, or design elements that look dated and need modernization for current market trends.</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Brand Evolution</h3>
                <p className="text-muted-foreground">Your business has evolved, but your logo hasn&apos;t. Time to refresh your visual identity to match your current positioning.</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0m-5.657 5.657l-.707.707M9 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Digital Optimization</h3>
                <p className="text-muted-foreground">Need a logo that works better at small sizes, on mobile, and across digital platforms while keeping brand continuity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Redesign Process */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">The Logo Redesign Process</h2>
            
            <div className="space-y-4">
              {[
                { step: "1", title: "Brand Discovery", desc: "Designer reviews your current logo, brand story, market position, and what needs to change." },
                { step: "2", title: "Concept Development", desc: "Multiple design directions that modernize your logo while preserving recognition and brand equity." },
                { step: "3", title: "Refinement", desc: "You select preferred direction(s), and designer refines, adjusts colors, typography, and proportions." },
                { step: "4", title: "Versatility Testing", desc: "Logo tested at different sizes, backgrounds, and formats to ensure it works everywhere." },
                { step: "5", title: "Final Delivery", desc: "Complete brand package with vector files, color specifications, and usage guidelines." },
                { step: "6", title: "Launch & Support", desc: "Guidance on rollout strategy and support for any final tweaks or file format needs." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Look For */}
        <section className="py-16 lg:py-24 border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">What to Expect from Professional Redesign Services</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { feature: "Brand Recognition Maintained", details: "New design keeps enough visual similarity so customers still recognize your brand instantly" },
                { feature: "Modern Aesthetic", details: "Updated design language that feels current and competitive in your industry" },
                { feature: "Versatile Formats", details: "Files optimized for all uses: print, digital, small sizes, embroidery, and signage" },
                { feature: "Color Optimization", details: "Updated color palette with modern hex codes, Pantone references, and CMYK for printing" },
                { feature: "Typography Refresh", details: "Modern font pairings that communicate your brand values and industry positioning" },
                { feature: "Full Documentation", details: "Brand guidelines, logo variations, clear and dark mode versions, and usage rules" },
              ].map((item) => (
                <div key={item.feature} className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-foreground text-lg mb-2">{item.feature}</h3>
                  <p className="text-muted-foreground text-sm">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-12">Industries Benefiting from Logo Redesigns</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { industry: "Tech Companies", reason: "Aging logos making it harder to attract modern customers and investors" },
                { industry: "Established Businesses", reason: "Refresh after company pivot, merger, or major rebranding initiative" },
                { industry: "E-Commerce", reason: "Modernize to compete in crowded digital marketplaces with outdated branding" },
                { industry: "Service Businesses", reason: "Update logo to reflect business growth and expanded service offerings" },
                { industry: "Nonprofits", reason: "Refresh visual identity to increase donations and volunteer engagement" },
                { industry: "Family Businesses", reason: "Modern logo for next generation to take over while honoring heritage" },
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
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Time for a Logo Refresh?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Find experienced designers on Fiverr who specialize in logo redesigns and brand modernization while preserving your identity.
              </p>
              <a
                href={FIVERR_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Start Your Redesign
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
                { name: "AI-Powered Design", href: "/categories/ai-logo-design", desc: "Generate fresh concepts with AI technology" },
                { name: "Brand Identity", href: "/categories/brand-identity", desc: "Complete brand system alongside your new logo" },
                { name: "Minimalist Design", href: "/categories/minimalist", desc: "Modern, clean aesthetic perfect for redesigns" },
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
