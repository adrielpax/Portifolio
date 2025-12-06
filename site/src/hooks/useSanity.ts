'use client'

import { useEffect, useState } from 'react'

interface UseSanityFetchOptions {
  query: string
  params?: Record<string, any>
  mock?: any
}

export function useSanityProjects() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function doFetch() {
      try {
        const res = await fetch('/api/sanity?type=projects')
        const data = await res.json()
        setProjects(data.result || [])
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    doFetch()
  }, [])

  return { projects, loading, error }
}

export function useSanityHistory() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function doFetch() {
      try {
        const res = await fetch('/api/sanity?type=history')
        const data = await res.json()
        setItems(data.result || [])
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    doFetch()
  }, [])

  return { items, loading, error }
}

export function useSanityPosts() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function doFetch() {
      try {
        const res = await fetch('/api/sanity?type=posts')
        const data = await res.json()
        setPosts(data.result || [])
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    doFetch()
  }, [])

  return { posts, loading, error }
}

export function useSanityFetch({ query, params = {}, mock }: UseSanityFetchOptions) {
  const [data, setData] = useState<any>(mock)
  const [loading, setLoading] = useState(!mock)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (mock) return

    async function doFetch() {
      try {
        const res = await fetch('/api/sanity', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query, params }),
        })
        const result = await res.json()
        setData(result.result || result)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    doFetch()
  }, [query, params, mock])

  return { data, loading, error }
}
