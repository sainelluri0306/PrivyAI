import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const name = typeof body?.name === "string" ? body.name.trim() : "";

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    await sql`
      create table if not exists waitlist_signups (
        id bigserial primary key,
        created_at timestamptz not null default now(),
        email text not null unique,
        name text
      );
    `;

    await sql`
      insert into waitlist_signups (email, name)
      values (${email}, ${name || null})
      on conflict (email) do nothing;
    `;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
