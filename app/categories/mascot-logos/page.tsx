'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const FIVERR_AFFILIATE_LINK = "https://go.fiverr.com/visit/?bta=1128446&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsearch%252Fgigs%253Fquery%253DAI%252520logo%2526source%253Dtop-bar%2526ref_ctx_id%253Dd45683988bfa4b50b7bcc20016b0cac6%2526search_in%253Deverywhere%2526search-autocomplete-original-term%253Dai%252520logo"

export default function MascotLogosCategory() {
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
              <span className="text-foreground font-medium">Mascot Logo Design</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Personality Builder</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                  Mascot Logo Design Services
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Create memorable mascot logos that bring personality and character to your brand. Perfect for sports teams, gaming companies, and entertainment brands.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={FIVERR_AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Find Mascot Artists
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
                  src="/images/category-mascot-logos.jpg"
                  alt="Mascot Logo Examples"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Mascots */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-12">The Power of Mascot Branding</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Emotional Connection</h3>
                <p className="text-muted-foreground">Mascots create personal relationships with audiences, making your brand more relatable and memorable.</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Increased Engagement</h3>
                <p className="text-muted-foreground">Mascots boost engagement rates on social media, merchandise, and events by 40-60% compared to static logos.</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0m-5.657 5.657l-.707.707M9 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Brand Recognition</h3>
                <p className="text-muted-foreground">Unique mascots make brands instantly recognizable and easier to recall than generic logos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mascot Types */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Types of Mascot Logos</h2>
            
            <div className="space-y-4">
              {[
                { type: "Cartoon Characters", desc: "Playful, animated mascots with exaggerated features that appeal to broad audiences" },
                { type: "Animal Mascots", desc: "Animal-based characters that embody brand values or industry characteristics" },
                { type: "Humanoid Mascots", desc: "Human-like characters dressed in branded colors or uniforms representing your brand" },
                { type: "Mythical Creatures", desc: "Fantasy creatures like dragons, unicorns, or phoenixes for unique brand positioning" },
                { type: "Inanimate Object Mascots", desc: "Anthropomorphic objects (food, tools, tech) given personality and charm" },
                { type: "Hybrid Mascots", desc: "Creative combinations of animals, humans, or objects for truly unique branding" },
              ].map((item) => (
                <div key={item.type} className="flex gap-4 p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm flex-shrink-0">★</div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.type}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Industries */}
        <section className="py-16 lg:py-24 border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Industries Using Mascot Logos Successfully</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { industry: "Sports Teams", reason: "Mascots become faces of franchises and engage fan communities" },
                { industry: "Gaming Studios", reason: "Character mascots enhance game identity and player connection" },
                { industry: "Children's Products", reason: "Mascots create trust and appeal directly to kids" },
                { industry: "Food & Beverage", reason: "Food mascots build personality and emotional brand connection" },
                { industry: "Entertainment", reason: "Mascots become iconic symbols of shows, movies, and events" },
                { industry: "Education", reason: "School and university mascots unite communities and traditions" },
              ].map((item) => (
                <div key={item.industry} className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-foreground text-lg mb-2">{item.industry}</h3>
                  <p className="text-muted-foreground text-sm">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">What You&apos;ll Get from Mascot Design Services</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { item: "Multiple Design Options", details: "Various character concepts and poses to choose from" },
                { item: "Fully Illustrated Mascot", details: "Professional, polished character artwork in multiple styles" },
                { item: "Different Poses & Expressions", details: "Happy, excited, neutral poses for varied use cases" },
                { item: "Vector Files", details: "Scalable SVG/AI files for unlimited size flexibility" },
                { item: "Animated Versions", details: "GIF and video animation options for digital use" },
                { item: "Brand Guidelines", details: "Rules and specifications for consistent mascot usage" },
                { item: "Merchandise Ready", details: "High-resolution files suitable for t-shirts, hats, and products" },
                { item: "Social Media Assets", details: "Optimized versions for all major social platforms" },
              ].map((item) => (
                <div key={item.item} className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-foreground text-lg mb-2">{item.item}</h3>
                  <p className="text-muted-foreground text-sm">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Create Your Mascot Today</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Find talented illustrators and character designers on Fiverr who specialize in creating memorable brand mascots.
              </p>
              <a
                href={FIVERR_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Hire a Mascot Designer
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
                { name: "AI-Powered Design", href: "/categories/ai-logo-design", desc: "Generate character concepts with AI" },
                { name: "3D Logos", href: "/categories/3d-logos", desc: "Create 3D character mascots" },
                { name: "Brand Identity", href: "/categories/brand-identity", desc: "Complete systems including mascots" },
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
