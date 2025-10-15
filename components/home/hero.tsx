import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="relative isolate min-h-[70vh] md:min-h-[80vh] flex items-center"
      style={{
        backgroundImage: "url('/refined-luxury-interior-living-room-with-warm-neut.jpg')",
      }}
    >
      {/* Parallax via bg-fixed */}
      <div className="absolute inset-0 bg-fixed bg-center bg-cover" />
      {/* Elegant overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/50 to-transparent" />

      <div className="container relative">
        <div className="max-w-3xl">
          <h1 className="h1-display">
            Timeless Interiors
            <span className="block text-primary">Crafted for Living</span>
          </h1>
          <p className="mt-6 body-lg text-foreground/80">
            Bespoke spaces balancing luxury and comfort—thoughtful materials, meticulous details, and a considered point
            of view.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground tracking-wide hover:opacity-90 transition"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 text-secondary-foreground tracking-wide hover:bg-secondary/90 transition"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
