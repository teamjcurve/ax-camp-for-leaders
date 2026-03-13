interface Env {
  INTERNAL_ID: string;
  INTERNAL_PW: string;
  EXTERNAL_ID: string;
  EXTERNAL_PW: string;
  TOKEN_SECRET: string;
  ALLOWED_ORIGIN: string;
}

function corsHeaders(origin: string, allowedOrigin: string): Record<string, string> {
  const isAllowed = origin === allowedOrigin || origin === 'http://localhost:3000';
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : '',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  };
}

async function hmacSign(payload: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

async function createToken(role: string, secret: string): Promise<string> {
  const payload = JSON.stringify({ role, exp: Date.now() + 24 * 60 * 60 * 1000 });
  const encoded = btoa(payload);
  const sig = await hmacSign(encoded, secret);
  return `${encoded}.${sig}`;
}

async function verifyToken(token: string, secret: string): Promise<{ valid: boolean; role?: string }> {
  const parts = token.split('.');
  if (parts.length !== 2) return { valid: false };

  const [encoded, sig] = parts;
  const expectedSig = await hmacSign(encoded, secret);
  if (sig !== expectedSig) return { valid: false };

  try {
    const payload = JSON.parse(atob(encoded));
    if (payload.exp < Date.now()) return { valid: false };
    return { valid: true, role: payload.role };
  } catch {
    return { valid: false };
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin, env.ALLOWED_ORIGIN);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    if (url.pathname === '/api/login' && request.method === 'POST') {
      try {
        const body = (await request.json()) as { id?: string; password?: string };
        const { id, password } = body;

        if (!id || !password) {
          return Response.json({ error: 'Invalid request' }, { status: 400, headers });
        }

        const credentials: Record<string, { id: string; pw: string }> = {
          internal: { id: env.INTERNAL_ID, pw: env.INTERNAL_PW },
          external: { id: env.EXTERNAL_ID, pw: env.EXTERNAL_PW },
        };

        const matchedRole = Object.entries(credentials).find(
          ([, cred]) => id === cred.id && password === cred.pw,
        )?.[0];

        if (!matchedRole) {
          return Response.json({ error: 'Invalid credentials' }, { status: 401, headers });
        }

        const token = await createToken(matchedRole, env.TOKEN_SECRET);
        return Response.json({ token, role: matchedRole }, { headers });
      } catch {
        return Response.json({ error: 'Invalid request body' }, { status: 400, headers });
      }
    }

    if (url.pathname === '/api/verify' && request.method === 'GET') {
      const auth = request.headers.get('Authorization');
      if (!auth?.startsWith('Bearer ')) {
        return Response.json({ valid: false }, { status: 401, headers });
      }

      const result = await verifyToken(auth.slice(7), env.TOKEN_SECRET);
      return Response.json(result, { status: result.valid ? 200 : 401, headers });
    }

    return Response.json({ error: 'Not found' }, { status: 404, headers });
  },
};
