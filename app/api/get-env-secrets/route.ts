import { NextResponse } from 'next/server';
import { defineFunction, secret } from '@aws-amplify/backend';

export async function GET() {
  // Call Amplify backend API (replace with real call if needed)
  // For demo, fetch from process.env
  const envMain = process.env.ENV_MAIN || 'Not set';
  const secretMain = process.env.SECRET_MAIN || 'Not set';

  return NextResponse.json({ envMain, secretMain });
}


// const mySecrets = defineFunction({
//   environment: {
//     // other env vars…
//     SECRET_MAIN: "test-secret-main", 
//     SECRET_BETA: secret('SECRET_MAIN'),
//   },
// });