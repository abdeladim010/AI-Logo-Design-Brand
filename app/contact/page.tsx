import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

const AFFILIATE_LINK = 'https://go.fiverr.com/visit/?bta=1128446&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fpro.fiverr.com%252Fhafeezur_rehman%252Fdesign-cool-and-eye-catchy-minimalist-logo-for-business%253Fcontext_referrer%253Dfiverr_business_listing%2526source%253Dtop-bar%2526ref_ctx_id%253D22109873fc89469bb16e530946b4a09f%2526pckg_id%253D1%2526pos%253D3%2526context_type%253Dauto%2526funnel%253D22109873fc89469bb16e530946b4a09f%2526imp_id%253D8904439f-8f04-43d9-979f-9eb1b3a6d1ec'

export const metadata: Metadata = {
  title: "Contact Us | AILogoHub",
  description:
    "Work with the best AI logo designers. Have a question about finding your perfect AI logo designer? We connect you with top-rated Fiverr talent — fast responses guaranteed.",
}

const stats = [
  { value: "4.9/5", label: "avg rating" },
  { value: "10,000+", label: "businesses served" },
  { value: "24h", label: "response time" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-muted-foreground">
              Work with the best AI logo designers
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a question about finding your perfect AI logo designer? Our team connects
              you with top-rated Fiverr talent — fast responses guaranteed.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                  Contact / Hire on Fiverr
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="grid grid-cols-3 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-border p-6 bg-card">
                  <p className="text-2xl font-bold text-primary">{s.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
