import Header from "@/components/site/header"
import Footer from "@/components/site/footer"
import Hero from "@/components/home/hero"
import SectionTitle from "@/components/home/section-title"
import ProjectCard from "@/components/home/project-card"
import TestimonialCard from "@/components/home/testimonial-card"
import Link from "next/link"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />

      {/* About Intro */}
      <section className="section-padding">
        <div className="container grid gap-10 md:grid-cols-2 md:gap-16">
          <SectionTitle
            eyebrow="Our Philosophy"
            title="Elevated design, effortless living."
            description="We create spaces that feel as good as they look—considered layouts, layered textures, and refined materials that last."
          />
          <div className="flex items-end">
            <p className="body-lg text-foreground/75">
              From full-home renovations to bespoke furnishings, we collaborate closely to bring your vision to life.
              Our process is tailored, transparent, and deeply detail-oriented.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-muted">
        <div className="container">
          <SectionTitle
            eyebrow="Selected Work"
            title="Featured Projects"
            description="A glimpse into recent residential and commercial transformations."
            align="left"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="The Harrington Residence"
              location="Mumbai"
              imageQuery="modern luxury living room with marble and beige tones"
            />
            <ProjectCard
              title="Seaside Penthouse"
              location="Goa"
              imageQuery="beachfront penthouse neutral palette oak wood and linen"
            />
            <ProjectCard
              title="Heritage Townhouse"
              location="Delhi"
              imageQuery="heritage townhouse with arches and brass accents"
            />
          </div>
          <div className="mt-10">
            <Link href="/projects" className="link-underline tracking-wide">
              View all projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="In Their Words"
            title="Client Testimonials"
            description="Kind words from clients we’ve had the pleasure to partner with."
            align="left"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="The team perfectly captured our lifestyle and elevated it beyond what we imagined."
              author="A. Mehra"
              detail="Residence Remodel"
            />
            <TestimonialCard
              quote="Impeccable taste and attention to detail. The process felt seamless."
              author="S. Kapoor"
              detail="Full Renovation"
            />
            <TestimonialCard
              quote="Our space finally feels like us—warm, functional, and beautiful."
              author="R. Desai"
              detail="Interior Styling"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-secondary">
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h3 className="h2-title">Let’s design something extraordinary.</h3>
            <p className="mt-4 body-lg text-secondary-foreground/80">
              Share your project goals and timeline—our team will be in touch with next steps.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground tracking-wide hover:opacity-90 transition"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
