"use client"

import Header from "@/components/site/header"
import Footer from "@/components/site/footer"

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section className="section-padding">
        <div className="container grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="h2-title">Tell us about your project</h1>
            <p className="mt-4 body-lg text-foreground/75">
              Please include scope, timeline, and any inspiration links. We respond within 2–3 business days.
            </p>

            <form
              className="mt-8 space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thank you! We will be in touch shortly.")
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border bg-background px-4 py-3 ring-offset-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border bg-background px-4 py-3 ring-offset-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border bg-background px-4 py-3 ring-offset-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Scope, style, budget, timeline..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground tracking-wide hover:opacity-90 transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          <aside aria-label="Map and address" className="space-y-6">
            <div className="rounded-xl border overflow-hidden">
              {/* Placeholder map (replace iframe src with your Google Maps embed when ready) */}
              <div className="aspect-[16/10] bg-muted grid place-items-center">
                <span className="text-foreground/60">Google Map Placeholder</span>
              </div>
            </div>

            <div className="rounded-xl border p-6">
              <h2 className="font-serif text-xl">Studio</h2>
              <address className="not-italic mt-3 text-foreground/75">
                21 Crescent Road, Suite 402
                <br />
                Mumbai, 400001
                <br />
                India
              </address>
              <a href="mailto:studio@example.com" className="mt-4 inline-block link-underline">
                studio@example.com
              </a>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  )
}
