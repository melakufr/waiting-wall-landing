import { addInvestorsAction, checkInvestorAction, getInvestorsAction } from "@/lib/actions";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email,name,location,ticketSize } = await request.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    if (!email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const checkResult = await checkInvestorAction({ email });
    if (!checkResult.data) {
      //create new subscription
      console.log(
        `New investor signup: ${email} at ${new Date().toISOString()}`
      );
      const result = await addInvestorsAction({ email,name,location,ticketSize });
      console.log(result);
      if (!result.success) {
        return NextResponse.json(
          { error: result.error || "Failed to add to invesotr" },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      {
        message: "Successfully added to investor",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const result = await getInvestorsAction();
    console.log(result);
    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Failed to get investors" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "all investors",
        data: result.data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}