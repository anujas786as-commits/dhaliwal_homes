import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSettings, updateSettings } from "@/lib/db-helper";

const SESSION_COOKIE_NAME = "admin_session";

async function isAuthorized() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME);
  return session && session.value === "PixarrowSessionToken2027";
}

export async function GET() {
  try {
    const settings = await getSettings();
    return NextResponse.json(settings);
  } catch (error) {
    console.error("Failed to fetch settings:", error);
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!(await isAuthorized())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { maintenanceMode } = body;

    if (typeof maintenanceMode !== "boolean") {
      return NextResponse.json({ error: "Invalid maintenanceMode value" }, { status: 400 });
    }

    const updated = await updateSettings({ maintenanceMode });
    return NextResponse.json({ success: true, settings: updated });
  } catch (error) {
    console.error("Failed to update settings:", error);
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
