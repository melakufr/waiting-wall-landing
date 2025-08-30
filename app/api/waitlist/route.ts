import { addSubscriberAction, checkSubscriberAction, getSubscribersAction } from "@/lib/actions";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    if (!email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const checkResult = await checkSubscriberAction({ email });
    if (!checkResult.data) {
      //create new subscription
      console.log(
        `New waitlist signup: ${email} at ${new Date().toISOString()}`
      );
      const result = await addSubscriberAction({ email });
      console.log(result);
      if (!result.success) {
        return NextResponse.json(
          { error: result.error || "Failed to add to waitlist" },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      {
        message: "Successfully added to waitlist",
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
    const result = await getSubscribersAction();
    console.log(result);
    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Failed to get subscribers" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "all subscribers",
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