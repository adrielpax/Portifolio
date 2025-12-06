"use client";

import React from "react";

type FetchOptions = {
  mock?: boolean;
  delay?: number;
};

export default function useSanityFetch<T = any>(queryOrParams: any, options: FetchOptions = { mock: true, delay: 200 }) {
  const { mock = true, delay = 200 } = options;
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const run = async () => {
      try {
        if (mock) {
          await new Promise((r) => setTimeout(r, delay));
          if (queryOrParams && queryOrParams.type === "projects") {
            const projects = Array.from({ length: 6 }).map((_, i) => ({
              id: i + 1,
              title: `Projeto Exemplo ${i + 1}`,
              description: `Uma breve descrição do projeto ${i + 1}`,
              imageUrl: "https://picsum.photos/600/400?random=" + (i + 1),
              tags: "React,Node.js",
              link: "https://github.com"
            }));
            if (!cancelled) setData(projects as any);
          } else if (queryOrParams && queryOrParams.type === "contactsCount") {
            if (!cancelled) setData((5 as unknown) as any);
          } else if (queryOrParams && queryOrParams.type === "blogPosts") {
            const posts = Array.from({ length: 5 }).map((_, i) => ({
              slug: `post-${i + 1}`,
              title: `Post ${i + 1}`,
              excerpt: `Resumo do post ${i + 1}`,
            }));
            if (!cancelled) setData(posts as any);
          } else {
            if (!cancelled) setData(null);
          }
        } else {
          // Call the server-side proxy which will forward to Sanity using server env vars
          const params = new URLSearchParams();
          if (queryOrParams && queryOrParams.type) params.set('type', queryOrParams.type);
          if (typeof queryOrParams === 'string') params.set('groq', queryOrParams);

          const res = await fetch(`/api/sanity?${params.toString()}`);
          const json = await res.json();
          // Sanity proxy returns { result: [...] } for queries, or a number for count
          const result = json?.result ?? json;
          if (!cancelled) setData(result as any);
        }
      } catch (err: any) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    run();

    return () => { cancelled = true; };
  }, [JSON.stringify(queryOrParams), mock, delay]);

  return { data, loading, error };
}
