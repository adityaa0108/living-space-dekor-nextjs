type Testimonial = {
  quote: string
  author: string
  detail?: string
}

export default function TestimonialCard({ quote, author, detail }: Testimonial) {
  return (
    <figure className="rounded-xl border bg-card p-6 md:p-8">
      <blockquote className="font-serif text-2xl leading-relaxed">“{quote}”</blockquote>
      <figcaption className="mt-6 text-sm text-foreground/70">
        — {author}
        {detail ? `, ${detail}` : ""}
      </figcaption>
    </figure>
  )
}
