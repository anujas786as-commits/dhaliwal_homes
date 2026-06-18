import { NextResponse } from "next/server";
import { saveInquiry } from "@/lib/db-helper";
import { sendInquiryEmails } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, budget, message } = body;

    // Basic Validation
    if (!name || !phone || !email || !service || !budget || !message) {
      return NextResponse.json(
        { error: "All fields are required. Please fill out the entire form." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const payload = { name, phone, email, service, budget, message };

    // 1. Save to Database or Fallback JSON
    let savedToDb = false;
    try {
      savedToDb = await saveInquiry(payload);
      console.log("Inquiry saved successfully.");
    } catch (dbError) {
      console.error("Database saving error (continuing with email dispatch):", dbError);
    }

    // 2. Dispatch email notifications
    let emailsSent = false;
    try {
      await sendInquiryEmails(payload);
      emailsSent = true;
    } catch (emailError) {
      console.error("Email dispatch failed:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been submitted successfully.",
      savedToDb,
      emailsSent,
    });
  } catch (error: any) {
    console.error("Error processing inquiry API request:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request. Please try again." },
      { status: 500 }
    );
  }
}
