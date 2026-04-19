import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

const AFFILIATE_LINK = "https://go.fiverr.com/visit/?bta=1128446&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsearch%252Fgigs%253Fquery%253DAI%252520logo%2526source%253Dtop-bar%2526ref_ctx_id%253Dd45683988bfa4b50b7bcc20016b0cac6%2526search_in%253Deverywhere%2526search-autocomplete-original-term%253Dai%252520logo"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Star className="h-4 w-4 fill-primary" />
              <span>Top-Rated AI Logo Designers</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Find Your Perfect <span className="text-primary">AI Logo</span> Designer
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Discover talented AI logo designers on Fiverr who can create stunning, 
              unique logos for your business. Compare services, read reviews, and 
              find the perfect match for your brand.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
              >
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                  Hire on Fiverr
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8"
              >
                <a href="/blog">
                  Read Our Guide
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by 10,000+ businesses
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ai-logo-hero.jpg"
                alt="AI Logo Design Examples"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 fill-primary text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">4.9/5 Rating</p>
                  <p className="text-sm text-muted-foreground">Average designer rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
