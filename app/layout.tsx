import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dr. Fábio Dolzany - Dermatologista | Santarém-PA",
  description:
    "Dermatologia baseada em ciência, cuidado e responsabilidade. Dr. Fábio Dolzany - Dermatologista Clínico, Estético e Capilar em Santarém-PA. Agende sua consulta.",
  keywords: "dermatologista, Santarém, Pará, acne, melasma, calvície, dermatologia estética, Dr. Fábio Dolzany",
  authors: [{ name: "Dr. Fábio Dolzany" }],
  creator: "Dr. Fábio Dolzany",
  publisher: "Dr. Fábio Dolzany",
  robots: "index, follow",
  icons: {
    icon: "/logo-nav.webp",
    shortcut: "/logo-nav.webp",
    apple: "/logo-nav.webp",
  },
  openGraph: {
    title: "Dr. Fábio Dolzany - Dermatologista | Santarém-PA",
    description:
      "Dermatologia baseada em ciência, cuidado e responsabilidade. Agende sua consulta com o Dr. Fábio Dolzany.",
    type: "website",
    locale: "pt_BR",
    siteName: "Dr. Fábio Dolzany",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Fábio Dolzany - Dermatologista | Santarém-PA",
    description: "Dermatologia baseada em ciência, cuidado e responsabilidade.",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://elfsightcdn.com" />
        <link rel="dns-prefetch" href="https://elfsightcdn.com" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased overflow-x-hidden`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
