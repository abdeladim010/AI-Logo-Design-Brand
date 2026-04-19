'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const FIVERR_AFFILIATE_LINK = "https://go.fiverr.com/visit/?bta=1128446&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsearch%252Fgigs%253Fquery%253DAI%252520logo%2526source%253Dtop-bar%2526ref_ctx_id%253Dd45683988bfa4b50b7bcc20016b0cac6%2526search_in%253Deverywhere%2526search-autocomplete-original-term%253Dai%252520logo"

export default function VintageLogosCategory() {
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
              <span className="text-foreground font-medium">Vintage & Retro Logos</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Classic Appeal</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                  Vintage & Retro Logo Design
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Classic designs with a nostalgic feel. Perfect for restaurants, breweries, vintage shops, and heritage brands that want to evoke tradition and authenticity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={FIVERR_AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Find Vintage Designers
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
                  src="/images/category-vintage-logos.jpg"
                  alt="Vintage Logo Examples"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Vintage */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-12">The Timeless Appeal of Vintage Design</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Trust & Authenticity</h3>
                <p className="text-muted-foreground">Vintage aesthetics communicate heritage, craftsmanship, and genuine quality—building customer trust.</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Emotional Connection</h3>
                <p className="text-muted-foreground">Nostalgic designs evoke positive memories and emotional responses that modern designs often can&apos;t.</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0m-5.657 5.657l-.707.707M9 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Timeless Quality</h3>
                <p className="text-muted-foreground">Vintage designs age gracefully and won't look dated, providing lasting brand value.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vintage Styles */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Popular Vintage Design Styles</h2>
            
            <div className="space-y-4">
              {[
                { style: "Art Deco (1920s-1940s)", desc: "Geometric shapes, bold lines, metallic accents, and symmetrical designs conveying luxury" },
                { style: "Mid-Century Modern (1950s-1960s)", desc: "Clean lines, organic shapes, retro typography, and playful color combinations" },
                { style: "Victorian Era (1800s-1900s)", desc: "Ornate details, serif typography, intricate flourishes, and classic elegance" },
                { style: "Retro 70s & 80s", desc: "Groovy colors, bold fonts, and nostalgic vibes that feel authentically dated" },
                { style: "Steampunk & Industrial", desc: "Mechanical elements, copper tones, gears, and Victorian-industrial fusion" },
                { style: "Americana & Western", desc: "Rustic textures, old-time typography, and American heritage aesthetics" },
              ].map((item) => (
                <div key={item.style} className="flex gap-4 p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm flex-shrink-0">◆</div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.style}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perfect For */}
        <section className="py-16 lg:py-24 border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Industries That Thrive with Vintage Branding</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { industry: "Craft Breweries", reason: "Vintage aesthetics communicate authenticity and traditional brewing craftsmanship" },
                { industry: "Restaurants & Cafes", reason: "Heritage and homestyle appeal that attracts customers seeking genuine dining experiences" },
                { industry: "Barbershops", reason: "Classic grooming heritage and traditional barber shop nostalgia" },
                { industry: "Antique/Vintage Shops", reason: "Perfectly aligned with product offerings and customer expectations" },
                { industry: "Artisan Foods", reason: "Handcrafted quality and family recipe traditions resonating with conscious consumers" },
                { industry: "Heritage Brands", reason: "Celebrate company history and long-standing reputation in market" },
              ].map((item) => (
                <div key={item.industry} className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-foreground text-lg mb-2">{item.industry}</h3>
                  <p className="text-muted-foreground text-sm">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Elements */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Key Elements in Vintage Logo Design</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { element: "Serif Fonts", details: "Classic typefaces like Garamond, Caslon, or custom serif styles" },
                { element: "Ornamental Details", details: "Decorative borders, flourishes, swashes, and scrollwork" },
                { element: "Muted Color Palettes", details: "Browns, creams, mustards, blacks, and earthy tones" },
                { element: "Texture & Grain", details: "Paper texture, wood grain, or distressed effects for authenticity" },
                { element: "Geometric Patterns", details: "Art Deco shapes, hexagons, and symmetrical arrangements" },
                { element: "Hand-Drawn Elements", details: "Illustrative quality suggesting manual craftsmanship" },
              ].map((item) => (
                <div key={item.element} className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-foreground text-lg mb-2">{item.element}</h3>
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
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Create Timeless Vintage Branding</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Find experienced designers on Fiverr who specialize in vintage and retro logo design for your brand.
              </p>
              <a
                href={FIVERR_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Hire a Vintage Designer
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
                { name: "Minimalist Design", href: "/categories/minimalist", desc: "Modern minimal approach to logo design" },
                { name: "Brand Identity", href: "/categories/brand-identity", desc: "Complete vintage branding systems" },
                { name: "Wordmark Logos", href: "/categories/wordmark-logos", desc: "Typography-focused vintage designs" },
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
