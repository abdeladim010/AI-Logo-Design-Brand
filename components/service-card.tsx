import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
  badge?: string
}

export function ServiceCard({ title, description, image, href, badge }: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <article className="overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/50">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {badge && (
            <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              {badge}
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          <div className="mt-4 flex items-center text-sm font-medium text-primary">
            Learn more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  )
}
