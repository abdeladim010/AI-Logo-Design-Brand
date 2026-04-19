'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const FIVERR_AFFILIATE_LINK = "https://go.fiverr.com/visit/?bta=1128446&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsearch%252Fgigs%253Fquery%253DAI%252520logo%2526source%253Dtop-bar%2526ref_ctx_id%253Dd45683988bfa4b50b7bcc20016b0cac6%2526search_in%253Deverywhere%2526search-autocomplete-original-term%253Dai%252520logo"

export default function LogoAnimationCategory() {
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
              <span className="text-foreground font-medium">Logo Animation</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Trending 2025</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                  Logo Animation Services
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Bring your logo to life with professional animations for videos, presentations, and social media. Motion graphics that captivate and engage your audience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={FIVERR_AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Find Animation Designers
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
                  src="/images/category-logo-animation.jpg"
                  alt="Logo Animation Examples"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Animate Your Logo */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-12">Why Logo Animation Matters</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Increased Engagement</h3>
                <p className="text-muted-foreground">Animated logos capture attention 5-10x better than static designs, boosting video and social media performance.</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Professional Quality</h3>
                <p className="text-muted-foreground">Show polish and sophistication across all video marketing, intros, and presentations to build brand credibility.</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Viral Potential</h3>
                <p className="text-muted-foreground">Animated logos are more shareable on social media, increasing organic reach and brand awareness.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Animation Types */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Popular Logo Animation Styles</h2>
            
            <div className="space-y-4">
              {[
                { title: "Intro Animations", desc: "Short logo reveals perfect for video beginnings, intros, and brand bumpers (3-5 seconds)" },
                { title: "Loop Animations", desc: "Seamless repeating animations for website backgrounds, screensavers, and social media" },
                { title: "Interactive Animations", desc: "Motion that responds to user interaction for websites, apps, and digital experiences" },
                { title: "Cinematic Reveals", desc: "Professional 3D logo animations with camera movements, particle effects, and dramatic reveals" },
                { title: "Transitions", desc: "Animated logo changes between scenes for video editing and multimedia presentations" },
                { title: "Motion Graphics", desc: "Full-scale motion design combining logos with typography, graphics, and storytelling" },
              ].map((style) => (
                <div key={style.title} className="flex gap-4 p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm flex-shrink-0">▶</div>
                  <div>
                    <h3 className="font-semibold text-foreground">{style.title}</h3>
                    <p className="text-sm text-muted-foreground">{style.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 lg:py-24 border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">What You'll Receive</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { format: "MP4 Video Files", details: "High-quality video in multiple resolutions (1080p, 4K, mobile optimized)" },
                { format: "GIF Files", details: "Optimized GIFs for web use, email, and social media platforms" },
                { format: "Webm/WebP", details: "Modern web-optimized formats for faster loading and better performance" },
                { format: "Motion Graphics Source", details: "Project files (AE, Cinema 4D) for future modifications and customization" },
                { format: "Multiple Versions", details: "Different animation speeds, timings, and style variations" },
                { format: "Commercial License", details: "Full rights to use animations for commercial, promotional, and business purposes" },
              ].map((item) => (
                <div key={item.format} className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-foreground text-lg mb-2">{item.format}</h3>
                  <p className="text-muted-foreground text-sm">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-12">Perfect For</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { useCase: "YouTube Intros", reason: "Captivating brand reveals at the start of video content" },
                { useCase: "Social Media Ads", reason: "Animated ads that stop the scroll and increase engagement" },
                { useCase: "Website Headers", reason: "Dynamic logo animations that greet visitors on your homepage" },
                { useCase: "Presentation Decks", reason: "Professional animations for pitches, talks, and webinars" },
                { useCase: "Video Marketing", reason: "Branded video content with cohesive animated logo presence" },
                { useCase: "Promotional Content", reason: "Product launches, event promotions, and special campaigns" },
              ].map((item) => (
                <div key={item.useCase} className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-foreground text-lg mb-2">{item.useCase}</h3>
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
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Animate Your Logo Today</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Find expert motion graphics designers on Fiverr who specialize in logo animations and video motion design.
              </p>
              <a
                href={FIVERR_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Hire an Animator Now
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
                { name: "3D Logo Design", href: "/categories/3d-logos", desc: "Stunning depth and dimension for your brand" },
                { name: "AI-Powered Design", href: "/categories/ai-logo-design", desc: "Generate logos using artificial intelligence" },
                { name: "Logo Redesign", href: "/categories/logo-redesign", desc: "Modernize your existing brand identity" },
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
