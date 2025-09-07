"use server";
import db from "@/util/db";
import { Subscribers } from "@prisma/client";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { signIn, signOut, auth } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";
import { unstable_cache } from "next/cache";

import { redirect, RedirectType } from "next/navigation";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
    console.log("customerrfrom", "from");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
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
      return { success: true, error: "Subscriber not found" };
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

//get all subscribers
export const getSubscribersAction = async (): Promise<{ success: boolean; data?: Subscribers[]; error?: string }> => {
  try {
    const res = await db.subscribers.findMany();
    return { success: true, data: res };
  } catch (error) {
    console.error("Error getting subscribers:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to get subscribers",
    };
  }
};

