"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";
import { contactMessages } from "@/db/schema";
import { withToast } from "@/lib/toast";

export async function submitContactMessageAction(formData: FormData) {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!fullName || !email || !subject || !message) {
    redirect(
      withToast("/contact", "Please complete every contact form field.", "error")
    );
  }

  try {
    await db.insert(contactMessages).values({
      fullName,
      email,
      subject,
      message,
    });
  } catch {
    redirect(
      withToast(
        "/contact",
        "Your message could not be sent. Please try again.",
        "error"
      )
    );
  }

  redirect(
    withToast(
      "/contact",
      "Message sent successfully. Our team will respond within 48 hours."
    )
  );
}
