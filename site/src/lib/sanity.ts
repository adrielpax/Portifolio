import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

export async function sanityFetch({ query, params = {} }: { query: string; params?: Record<string, any> }) {
  try {
    return await client.fetch(query, params)
  } catch (error) {
    console.error('Sanity fetch error:', error)
    throw error
  }
}
