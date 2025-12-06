"use client"

import React, { Suspense, useMemo } from 'react'
import CardContents, { HistoryItem } from '@/src/components/layout/CardContents'

function createResource(url: string) {
  let status = 'pending'
  let result: any
  const promise = fetch(url)
    .then((r) => r.json())
    .then((data) => {
      status = 'success'
      result = data.result || data
    })
    .catch((err) => {
      status = 'error'
      result = err
    })

  return {
    read() {
      if (status === 'pending') throw promise
      if (status === 'error') throw result
      return result
    },
  }
}

function firstParagraphFromContent(blocks: any): string {
  // If excerpt provided in Sanity root object, prefer it. If content is blockContent,
  // try to extract first text block.
  try {
    if (!blocks) return ''
    if (typeof blocks === 'string') return blocks.split('\n\n')[0]
    if (Array.isArray(blocks)) {
      const first = blocks.find((b) => b._type === 'block' && Array.isArray(b.children))
      if (first) return first.children.map((c: any) => c.text).join('').slice(0, 280)
    }
  } catch (e) {
    // ignore
  }
  return ''
}

function HistoryInner({ resource }: { resource: ReturnType<typeof createResource> }) {
  const data = resource.read()

  // data expected to be an array of history documents
  const items: HistoryItem[] = (data || []).map((d: any) => ({
    title: d.title || d.slug || 'Sem título',
    summary: d.excerpt || firstParagraphFromContent(d.content) || d._rawExcerpt || '',
    date: d.date || d.publishedAt || null,
    image: d.image?.asset?.url || (d.image && d.image.url) || null,
  }))

  return <CardContents items={items} />
}

export default function HistorySectionClient() {
  const resource = useMemo(() => createResource('/api/sanity?type=history'), [])

  return (
    <div className="w-full max-w-[875px]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-cyan-400">Minha História</h2>
        <p className="text-white/70 text-sm">Fragmentos da minha jornada — carregados do CMS.</p>
      </div>
      <Suspense fallback={<div className="text-sm text-white/60">Carregando história...</div>}>
        <HistoryInner resource={resource} />
      </Suspense>
    </div>
  )
}
