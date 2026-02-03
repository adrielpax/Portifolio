const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

/**
 * Client HTTP simples para Sanity sem depender de `next-sanity`.
 * Usa a API HTTP pública com GROQ.
 */
export async function sanityFetch({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, any>;
}) {
  if (!projectId || !dataset) {
    throw new Error(
      "Sanity env vars (NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET) não configuradas."
    );
  }

  // Substitui parâmetros simples na query (apenas chave -> valor literal)
  let finalQuery = query;
  for (const [key, value] of Object.entries(params)) {
    // Atenção: substituição bem simples, suficiente para uso básico
    finalQuery = finalQuery.replace(
      new RegExp(`\\$${key}\\b`, "g"),
      JSON.stringify(value)
    );
  }

  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(
    finalQuery
  )}`;

  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    console.error("Sanity fetch error:", text);
    throw new Error(`Sanity request failed: ${res.status}`);
  }

  return res.json();
}
