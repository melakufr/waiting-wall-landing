"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

interface EmailCaptureFormProps {
  placeholder?: string
  buttonText?: string
  className?: string
}

export function EmailCaptureForm({
  placeholder = "Email address",
  buttonText = "Get Early Access",
  className = "",
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
      })
      return
    }

    if (!email.includes("@") || !email.includes(".")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
     
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "You've been added to our waitlist. We'll be in touch soon!",
        })
        setEmail("")
      } else {
        throw new Error("Failed to join waitlist")
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
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
        disabled={isLoading}
      />
      <Button
        type="submit"
        className="bg-black text-white hover:bg-gray-800 px-6 w-full sm:w-auto"
        disabled={isLoading}
      >
        {isLoading ? "Joining..." : buttonText}
      </Button>
    </form>
  )
}
