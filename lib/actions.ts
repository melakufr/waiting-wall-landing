import db from "@/util/db";
import { Subscribers } from "@prisma/client";

export const addSubscriberAction = async (formData: {
  email: string;
}): Promise<{ success: boolean; data?: Subscribers; error?: string }> => {
  try {
    const { email } = formData;
    // console.log(`to be added: ${email} `);
    const res = await db.subscribers.create({
      data: {
        ...formData,
        createdAt: new Date(),
      },
    });
    return { success: true, data: res };
  } catch (error) {
    console.error("Error adding subscriber:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to add subscriber",
    };
  }
};

//check if exist on DB
export const checkSubscriberAction = async (formData: {
  email: string;
}): Promise<{ success: boolean; data?: Subscribers; error?: string }> => {
  try {
    const { email } = formData;
    const res = await db.subscribers.findUnique({
      where: {
        email,
      },
    });
    if (!res) {
      return { success: false, error: "Subscriber not found" };
    }
    return { success: true, data: res };
  } catch (error) {
    console.error("Error checking subscriber:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to check subscriber",
    };
  }
};

