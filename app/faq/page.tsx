import React from 'react'
import { FAQSection } from '@/components/FAQ-page'
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "FAQ | WaitingWall",
  description: "Frequently asked questions about WaitingWall and how it works.",
};
function Faq() {
  return (
    <FAQSection/>
  )
}

export default Faq