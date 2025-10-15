import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container section-padding grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="h3-title">Living Space Dekor</h3>
          <p className="mt-4 body-lg text-foreground/70">
            Timeless interior design for refined residential and commercial spaces.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xl">Explore</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link className="link-underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link-underline" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link-underline" href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="link-underline" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl">Connect</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <a className="link-underline" href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a className="link-underline" href="https://pinterest.com" target="_blank" rel="noreferrer">
                Pinterest
              </a>
            </li>
            <li>
              <a className="link-underline" href="mailto:studio@example.com">
                studio@example.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-sm text-foreground/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Living Space Dekor. All rights reserved.</span>
          <span>Designed with care. Built on Next.js.</span>
        </div>
      </div>
    </footer>
  )
}
