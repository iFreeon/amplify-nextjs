import { Context } from '@aws-amplify/backend';

export async function handler(ctx: Context) {
  // Access environment variables and secrets using Amplify's built-in context
  const envMain = ctx.env.ENV_MAIN || 'Not set';
  const secretMain = ctx.secrets.SECRET_MAIN || 'Not set';

  return {
    statusCode: 200,
    body: JSON.stringify({ envMain, secretMain })
  };
}
