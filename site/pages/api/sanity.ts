import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Server-side proxy to Sanity. Requires environment variables set on the server:
  // SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (optional but recommended)
  try {
    const { type, groq } = req.query as { type?: string; groq?: string };

    const projectId = process.env.SANITY_PROJECT_ID;
    const dataset = process.env.SANITY_DATASET;
    const token = process.env.SANITY_TOKEN;

    if (!projectId || !dataset) {
      return res.status(400).json({ error: 'SANITY_PROJECT_ID and SANITY_DATASET must be set on the server.' });
    }

    let query = groq || '';
    if (!query) {
      if (type === 'projects') query = '*[_type == "project"] | order(_createdAt desc)';
      else if (type === 'blogPosts') query = '*[_type == "post"] | order(date desc)';
      else if (type === 'contactsCount') query = 'count(*[_type == "contact"])';
      else query = '*[]';
    }

    const url = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${encodeURIComponent(query)}`;

    const headers: Record<string, string> = { Accept: 'application/json' };
    if (token) headers.Authorization = `Bearer ${token}`;

    const r = await fetch(url, { headers });
    if (!r.ok) {
      const text = await r.text();
      return res.status(r.status).json({ error: 'Sanity request failed', detail: text });
    }

    const json = await r.json();
    // Return the raw sanity response to the client
    return res.status(200).json(json);
  } catch (err: any) {
    console.error('Sanity proxy error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
