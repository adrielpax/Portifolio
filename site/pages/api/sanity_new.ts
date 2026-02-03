import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Server-side proxy to Sanity. Requires environment variables set on the server:
  // NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN (optional but recommended)
  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
    const token = process.env.SANITY_API_TOKEN

    if (!projectId || !dataset) {
      return res.status(400).json({ error: 'NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET must be set.' })
    }

    let query = ''

    // GET requests: type-based queries
    if (req.method === 'GET') {
      const { type } = req.query as { type?: string }

      if (type === 'projects') {
        query = '*[_type == "project"] | order(order asc, publishedAt desc)'
      } else if (type === 'history') {
        query = '*[_type == "history"] | order(order asc, date desc)'
      } else if (type === 'posts') {
        query = '*[_type == "post"] | order(date desc)'
      } else if (type === 'contacts') {
        query = '*[_type == "contact"] | order(submittedAt desc)'
      } else {
        return res.status(400).json({ error: 'Invalid type parameter' })
      }
    } 
    // POST requests: custom GROQ queries
    else if (req.method === 'POST') {
      const { query: customQuery } = req.body
      query = customQuery

      if (!query) {
        return res.status(400).json({ error: 'Query is required in POST body' })
      }
    } 
    else {
      return res.status(405).json({ error: 'Method not allowed' })
    }

    const url = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${encodeURIComponent(query)}`

    const headers: Record<string, string> = { 
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(url, { headers })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Sanity API error:', response.status, errorText)
      return res.status(response.status).json({ error: 'Sanity request failed', detail: errorText })
    }

    const json = await response.json()
    return res.status(200).json(json)
  } catch (err: any) {
    console.error('Sanity proxy error:', err)
    return res.status(500).json({ error: 'Internal server error', detail: err.message })
  }
}
