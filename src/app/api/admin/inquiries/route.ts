import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getInquiries } from "@/lib/db-helper";

const SESSION_COOKIE_NAME = "admin_session";

async function isAuthorized() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME);
  return session && session.value === "PixarrowSessionToken2027";
}

export async function GET() {
  try {
    if (!(await isAuthorized())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const inquiries = await getInquiries();
    return NextResponse.json({ success: true, inquiries });
  } catch (error) {
    console.error("Failed to fetch inquiries:", error);
    return NextResponse.json({ error: "Failed to fetch inquiries" }, { status: 500 });
  }
}
