import { NextResponse } from 'next/server';
import { secret } from '@aws-amplify/backend';

export async function GET() {
  // Call Amplify backend API (replace with real call if needed)
  // For demo, fetch from process.env
  const envMain = process.env.ENV_MAIN || 'Not set';
  const secretMain = secret('SECRET_MAIN') || 'Not set';

  return NextResponse.json({ envMain, secretMain });
}
