import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Khanna Interiors — Luxury Interior Design",
  description: "Sophisticated residential and commercial interior design with timeless elegance and refined comfort.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${cormorant.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
