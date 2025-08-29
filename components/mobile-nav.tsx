"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <a href="#features" className="text-gray-700 hover:text-black py-2" onClick={() => setIsOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-black py-2" onClick={() => setIsOpen(false)}>
              How It Works
            </a>
            <a href="#community" className="text-gray-700 hover:text-black py-2" onClick={() => setIsOpen(false)}>
              Community
            </a>
            <a href="#faq" className="text-gray-700 hover:text-black py-2" onClick={() => setIsOpen(false)}>
              FAQ
            </a>
            <a href="#signin" className="text-gray-700 hover:text-black py-2" onClick={() => setIsOpen(false)}>
              Sign in
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
