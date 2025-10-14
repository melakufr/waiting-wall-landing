import type React from "react";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";


export const metadata: Metadata = {
  title: "WaitingWall | %s",
  description:
    "A minimalist social space to share what you're waiting for. Post semi-anonymously, connect with friends, and explore local trends.",
  generator: "WaitingWall",
  applicationName: "WaitingWall",
  keywords: ["WaitingWall", "WaitingWall App", "WaitingWall Social"],
};
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <head>
        {/* googleTag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K5HVL7F0PE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K5HVL7F0PE');
          `}
        </Script>
      </head>

      <body className={spaceGrotesk.className}>
        {children}
        <Toaster />
      </body>
    </html>

  );
}
