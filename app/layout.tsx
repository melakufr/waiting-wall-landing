import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: "WaitingWall - Share the Wait",
  description:
    "A minimalist social space to share what you're waiting for. Post semi-anonymously, connect with friends, and explore local trends.",
  generator: "WaitingWall",
}
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
