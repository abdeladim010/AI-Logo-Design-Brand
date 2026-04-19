import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const AFFILIATE_LINK = "https://go.fiverr.com/visit/?bta=1128446&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsearch%252Fgigs%253Fquery%253DAI%252520logo%2526source%253Dtop-bar%2526ref_ctx_id%253Dd45683988bfa4b50b7bcc20016b0cac6%2526search_in%253Deverywhere%2526search-autocomplete-original-term%253Dai%252520logo"

const benefits = [
  "Access to thousands of AI logo designers",
  "Prices starting from $5",
  "Quick turnaround times",
  "100% satisfaction guarantee",
]

export function CTASection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-2xl bg-primary p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl text-balance">
                Ready to Create Your Perfect AI Logo?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Connect with talented AI logo designers on Fiverr and bring your brand vision to life. 
                Find the perfect freelancer for your budget and style.
              </p>
              <ul className="mt-6 space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-primary-foreground">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6"
              >
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                  Browse Designers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-sm text-primary-foreground/70 text-center">
                Join millions of satisfied customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
