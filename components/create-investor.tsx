"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

interface RegisterInvestorFormProps {
  className?: string
}

export function RegisterInvestorForm({
  className = "",
}: RegisterInvestorFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    ticketSize: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.ticketSize) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
      })
      return
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
      })
      return
    }

    const ticketSize = parseFloat(formData.ticketSize)
    if (isNaN(ticketSize) || ticketSize <= 0) {
      toast({
        title: "Invalid ticket size",
        description: "Please enter a valid investment amount.",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/investors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          location: formData.location,
          ticketSize: ticketSize,
        }),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "You've been registered as an investor. We'll be in touch soon!",
        })
        setFormData({
          name: "",
          email: "",
          location: "",
          ticketSize: "",
        })
      } else {
        throw new Error("Failed to register")
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
      <Input
        name="name"
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        disabled={isLoading}
        className="w-full"
        required
      />
      
      <Input
        name="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        disabled={isLoading}
        className="w-full"
        required
      />

      <Input
        name="location"
        type="text"
        placeholder="Location (Optional)"
        value={formData.location}
        onChange={handleChange}
        disabled={isLoading}
        className="w-full"
      />

      <Input
        name="ticketSize"
        type="number"
        placeholder="Investment Amount (USD)"
        value={formData.ticketSize}
        onChange={handleChange}
        disabled={isLoading}
        min="0"
        step="1000"
        className="w-full"
        required
      />

      <Button
        type="submit"
        className="w-full bg-black text-white hover:bg-gray-800 px-6"
        disabled={isLoading}
      >
        {isLoading ? "Registering..." : "Register as Investor"}
      </Button>
    </form>
  )
}