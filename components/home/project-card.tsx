type Props = {
  title: string
  location: string
  imageQuery: string
}

export default function ProjectCard({ title, location, imageQuery }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-xl border bg-card">
      <img
        src={`/.jpg?height=900&width=1400&query=${encodeURIComponent(imageQuery)}`}
        alt={`${title} - ${location}`}
        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
        <div>
          <h3 className="font-serif text-xl text-white drop-shadow">{title}</h3>
          <p className="text-white/80 text-sm drop-shadow">{location}</p>
        </div>
        <span className="inline-flex items-center justify-center rounded-full bg-primary/90 text-primary-foreground text-xs px-3 py-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
          View
        </span>
      </div>
    </article>
  )
}
