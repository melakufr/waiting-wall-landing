import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    if (!email.includes("@") || !email.includes(".")) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    console.log(`New waitlist signup: ${email} at ${new Date().toISOString()}`)

    // In a real application, you would save this to a database
    // For now, we'll just simulate success

    return NextResponse.json({ message: "Successfully added to waitlist" }, { status: 200 })
  } catch (error) {
    console.error("Waitlist signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
