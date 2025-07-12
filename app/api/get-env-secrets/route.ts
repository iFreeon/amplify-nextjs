import { NextResponse } from 'next/server';

export async function GET() {
  // Call Amplify backend API (replace with real call if needed)
  // For demo, fetch from process.env
  const envMain = process.env.NEXT_PUBLIC_ENV_MAIN || 'Not set';
  const secretMain = process.env.NEXT_PUBLIC_SECRET_MAIN || 'Not set';

  return NextResponse.json({ envMain, secretMain });
}
