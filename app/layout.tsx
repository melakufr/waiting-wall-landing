import type React from "react";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";


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
        <body className={spaceGrotesk.className}>
          {children}
          <Toaster />
        </body>
      </html>
 
  );
}
