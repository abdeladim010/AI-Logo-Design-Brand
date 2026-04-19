import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Target, Users, Award, Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | AILogoHub",
  description: "Learn about AILogoHub - your trusted resource for finding the best AI logo designers on Fiverr. We help businesses create stunning brand identities.",
}

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We only recommend top-rated designers who consistently deliver exceptional work.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We&apos;re building a community of businesses and designers who value quality and creativity.",
  },
  {
    icon: Award,
    title: "Expert Curation",
    description: "Our team reviews hundreds of designers to bring you only the best options.",
  },
  {
    icon: Heart,
    title: "Passionate Support",
    description: "We&apos;re here to help you find the perfect designer for your unique needs.",
  },
]

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "500+", label: "Featured Designers" },
  { value: "50K+", label: "Logos Created" },
  { value: "4.9", label: "Average Rating" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Helping Businesses Find Their Perfect Logo
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  AILogoHub was founded with a simple mission: to help businesses of all sizes 
                  find talented AI logo designers who can bring their brand vision to life. 
                  We believe every business deserves a stunning logo, regardless of budget.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Our platform connects you with the best AI logo designers on Fiverr, 
                  providing curated recommendations, helpful guides, and expert advice to 
                  make your logo design journey smooth and successful.
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ai-logo-hero.jpg"
                  alt="AI Logo Design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-primary lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at AILogoHub
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="text-center p-6 rounded-lg border border-border bg-card"
                >
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We&apos;re on a mission to democratize professional logo design. By connecting 
                businesses with talented AI logo designers on Fiverr, we&apos;re making it 
                possible for startups, small businesses, and entrepreneurs to access 
                world-class design services at affordable prices.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Whether you&apos;re launching a new venture or rebranding an existing business, 
                we&apos;re here to help you find the perfect designer who understands your vision 
                and can translate it into a stunning visual identity.
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
