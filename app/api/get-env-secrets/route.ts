import { NextResponse } from 'next/server';
import { defineFunction, secret } from '@aws-amplify/backend';
export const dynamic = 'force-dynamic';

export async function GET() {
  // Call Amplify backend API (replace with real call if needed)
  // For demo, fetch from process.env
  const envMain = process.env.ENV_MAIN || 'Not set';
  let secretMain: string = 'Not set';
  console.log('Fetching secret for SECRET_MAIN');
  try {
    const s = secret('SECRET_MAIN');
    secretMain = typeof s === 'object' && 'value' in s ? String(s.value) : 'Not set';
  } catch {
    secretMain = 'Not set';
  }
  console.log('ENV_MAIN:', envMain);  
  console.log('SECRET_MAIN:', secretMain);
  return NextResponse.json({ envMain, secretMain });
}

// const mySecrets = defineFunction({
//   environment: {
//     // other env vars…
//     SECRET_MAIN: "test-secret-main", 
//     SECRET_BETA: secret('SECRET_MAIN'),
//   },
// });