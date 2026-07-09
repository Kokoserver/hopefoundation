"use server";

import { db } from "@/db";
import { newsletterSubscriptions } from "@/db/schema";

export type NewsletterState = {
  message: string;
  success: boolean;
};

export async function subscribeToNewsletterAction(
  _previousState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      message: "Please enter a valid email address.",
      success: false,
    };
  }

  try {
    const inserted = await db
      .insert(newsletterSubscriptions)
      .values({ email })
      .onConflictDoNothing({ target: newsletterSubscriptions.email })
      .returning({ id: newsletterSubscriptions.id });

    return {
      message:
        inserted.length > 0
          ? "Thank you. You are now subscribed."
          : "This email is already subscribed.",
      success: true,
    };
  } catch {
    return {
      message: "Subscription failed. Please try again.",
      success: false,
    };
  }
}
