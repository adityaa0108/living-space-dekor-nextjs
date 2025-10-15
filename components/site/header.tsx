"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" aria-label="Living Space Dekor Home" className="font-serif text-xl tracking-wide">
          Living Space Dekor
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide link-underline ${
                  active ? "text-primary" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border hover:bg-muted transition"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <div className="relative w-5 h-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-foreground transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-foreground transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 bg-foreground transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 flex flex-col">
            {nav.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 text-base tracking-wide ${active ? "text-primary" : "text-foreground/90"}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
