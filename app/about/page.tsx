import Header from "@/components/site/header"
import Footer from "@/components/site/footer"
import SectionTitle from "@/components/home/section-title"

export default function AboutPage() {
  return (
    <main>
      <Header />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Our Story"
            title="Design with soul, crafted with precision."
            description="Living Space Dekor is a full-service studio known for warm, modern spaces that prioritize comfort, function, and longevity."
          />
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <p className="body-lg text-foreground/75">
              Founded on the belief that great design improves everyday living, our practice blends architectural rigor
              with a soft, livable aesthetic. We source timeless materials and collaborate with skilled craftspeople to
              deliver spaces that endure.
            </p>
            <p className="body-lg text-foreground/75">
              Our process is collaborative and transparent. We value clarity, communication, and care at every step—from
              concept to completion and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container">
          <h2 className="h2-title">Mission & Values</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            <li className="rounded-xl border bg-card p-6">
              <h3 className="font-serif text-xl">Intentionality</h3>
              <p className="mt-3 text-foreground/75">
                Every detail supports a cohesive vision—balanced, functional, and human.
              </p>
            </li>
            <li className="rounded-xl border bg-card p-6">
              <h3 className="font-serif text-xl">Craft</h3>
              <p className="mt-3 text-foreground/75">
                We obsess over materials, finishes, and joinery to achieve lasting quality.
              </p>
            </li>
            <li className="rounded-xl border bg-card p-6">
              <h3 className="font-serif text-xl">Warmth</h3>
              <p className="mt-3 text-foreground/75">
                Spaces should welcome you in—soft lighting, layered textures, natural palettes.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="h2-title">Team</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name: "Monica Khanna", role: "Creative Director" },
              { name: "Arjun Patel", role: "Senior Designer" },
              { name: "Priya Sharma", role: "Project Manager" },
            ].map((m) => (
              <div key={m.name} className="rounded-xl border bg-card p-6">
                <div className="h-40 w-full overflow-hidden rounded-lg bg-muted">
                  <img
                    src="/portrait-editorial-soft-lighting.jpg"
                    alt={`${m.name} portrait`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-serif text-xl">{m.name}</h3>
                <p className="text-foreground/70">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
