import { NextResponse } from "next/server";
import { Resend } from "resend";
import { KELLY_EMAIL, BUSINESS_NAME, PHONE } from "@/lib/constants";

interface BookingData {
  fullName: string;
  phone: string;
  email: string;
  boatType: string;
  engineBrand: string;
  problem: string;
  preferredDate: string;
  location: string;
}

export async function POST(request: Request) {
  try {
    const body: BookingData = await request.json();

    // Validate required fields
    const { fullName, phone, email, problem, location } = body;
    if (!fullName?.trim() || !phone?.trim() || !email?.trim() || !problem?.trim() || !location?.trim()) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Dev mode fallback: log to console if no API key
    if (!process.env.RESEND_API_KEY) {
      console.log("=== DEV MODE: Booking Received ===");
      console.log(JSON.stringify(body, null, 2));
      console.log("=== Would email Kelly at:", KELLY_EMAIL, "===");
      console.log("=== Would email customer at:", email, "===");
      return NextResponse.json({ success: true, message: "Booking submitted (dev mode)." });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send both emails in parallel
    const [kellyEmail, customerEmail] = await Promise.all([
      // Email to Kelly with booking details
      resend.emails.send({
        from: `${BUSINESS_NAME} <onboarding@resend.dev>`,
        to: KELLY_EMAIL,
        subject: `New Booking: ${fullName} — ${body.boatType || "Boat"} ${body.engineBrand || ""}`.trim(),
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #0f2b5b; padding: 20px; text-align: center;">
              <h1 style="color: #f59e0b; margin: 0; font-size: 24px;">New Booking Request</h1>
            </div>
            <div style="padding: 24px; background: #f9fafb;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #0f2b5b; width: 140px;">Name:</td><td style="padding: 8px 0;">${fullName}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #0f2b5b;">Phone:</td><td style="padding: 8px 0;"><a href="tel:${phone.replace(/\D/g, '')}">${phone}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #0f2b5b;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
                ${body.boatType ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #0f2b5b;">Boat Type:</td><td style="padding: 8px 0;">${body.boatType}</td></tr>` : ""}
                ${body.engineBrand ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #0f2b5b;">Engine Brand:</td><td style="padding: 8px 0;">${body.engineBrand}</td></tr>` : ""}
                <tr><td style="padding: 8px 0; font-weight: bold; color: #0f2b5b; vertical-align: top;">Problem:</td><td style="padding: 8px 0;">${problem}</td></tr>
                ${body.preferredDate ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #0f2b5b;">Preferred Date:</td><td style="padding: 8px 0;">${body.preferredDate}</td></tr>` : ""}
                <tr><td style="padding: 8px 0; font-weight: bold; color: #0f2b5b;">Location:</td><td style="padding: 8px 0;">${location}</td></tr>
              </table>
            </div>
          </div>
        `,
      }),

      // Confirmation email to customer
      resend.emails.send({
        from: `${BUSINESS_NAME} <onboarding@resend.dev>`,
        to: email,
        subject: `Booking Confirmed — ${BUSINESS_NAME}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #0f2b5b; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px;">${BUSINESS_NAME}</h1>
              <p style="color: #0891b2; margin: 8px 0 0; font-size: 14px;">Mobile Marine Mechanic — Cedar Key, FL</p>
            </div>
            <div style="padding: 32px 24px; background: #ffffff;">
              <h2 style="color: #0f2b5b; margin: 0 0 16px;">Thank you, ${fullName}!</h2>
              <p style="color: #374151; line-height: 1.6;">
                Your booking request has been received. Kelly will review your request and
                <strong>confirm your appointment within 2 hours</strong>.
              </p>
              <div style="background: #f0fdfa; border-left: 4px solid #0891b2; padding: 16px; margin: 24px 0; border-radius: 4px;">
                <p style="margin: 0; color: #0f2b5b; font-weight: bold;">Your Booking Details:</p>
                ${body.boatType ? `<p style="margin: 4px 0 0; color: #374151;">Boat: ${body.boatType} ${body.engineBrand ? `(${body.engineBrand})` : ""}</p>` : ""}
                <p style="margin: 4px 0 0; color: #374151;">Problem: ${problem}</p>
                ${body.preferredDate ? `<p style="margin: 4px 0 0; color: #374151;">Preferred Date: ${body.preferredDate}</p>` : ""}
                <p style="margin: 4px 0 0; color: #374151;">Location: ${location}</p>
              </div>
              <p style="color: #374151; line-height: 1.6;">
                Need immediate help? Call us directly:
              </p>
              <p style="text-align: center; margin: 16px 0;">
                <a href="tel:3526147167" style="display: inline-block; background: #f59e0b; color: #0f2b5b; padding: 12px 32px; text-decoration: none; font-weight: bold; border-radius: 4px; font-size: 18px;">
                  Call ${PHONE}
                </a>
              </p>
            </div>
            <div style="background: #0f2b5b; padding: 16px; text-align: center;">
              <p style="color: #6b7280; margin: 0; font-size: 12px;">
                &copy; ${new Date().getFullYear()} ${BUSINESS_NAME} LLC. Cedar Key, FL.
              </p>
            </div>
          </div>
        `,
      }),
    ]);

    if (kellyEmail.error || customerEmail.error) {
      console.error("Email error:", kellyEmail.error || customerEmail.error);
      return NextResponse.json(
        { success: false, message: `Something went wrong sending confirmation. Please call ${PHONE} directly.` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Booking submitted successfully." });
  } catch (err) {
    console.error("Booking error:", err);
    return NextResponse.json(
      { success: false, message: `Something went wrong. Please call ${PHONE} directly.` },
      { status: 500 }
    );
  }
}
