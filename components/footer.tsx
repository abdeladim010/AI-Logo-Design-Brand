import Link from "next/link"

const AFFILIATE_LINK = "https://go.fiverr.com/visit/?bta=1128446&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsearch%252Fgigs%253Fquery%253DAI%252520logo%2526source%253Dtop-bar%2526ref_ctx_id%253Dd45683988bfa4b50b7bcc20016b0cac6%2526search_in%253Deverywhere%2526search-autocomplete-original-term%253Dai%252520logo"

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
  ],
  categories: [
    { name: "AI Logo Design", href: "/categories/ai-logo-design" },
    { name: "Brand Identity", href: "/categories/brand-identity" },
    { name: "Minimalist Logos", href: "/categories/minimalist" },
    { name: "3D Logos", href: "/categories/3d-logos" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">
                AI<span className="text-primary">Logo</span>Hub
              </span>
            </Link>
            <p className="mt-4 text-sm text-background/70 max-w-md">
              Your trusted resource for finding the best AI logo designers on Fiverr. 
              We help startups, small businesses, and creators find the perfect designer 
              for their brand identity.
            </p>
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Browse AI Logo Designers
            </a>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Categories</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-background/20 pt-8">
          <p className="text-sm text-background/50 text-center">
            © {new Date().getFullYear()} AILogoHub. All rights reserved. 
            <span className="block sm:inline sm:ml-2">
              Affiliate disclosure: We may earn a commission from qualifying purchases.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
