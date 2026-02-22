import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1 AND password=$2",
    [email, password]
  );

  if (result.rows.length > 0) {
    return NextResponse.json({ success: true });
  }

  return new NextResponse("Invalid credentials", { status: 401 });
}
