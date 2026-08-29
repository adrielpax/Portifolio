import { NextResponse } from "next/server";

/**
 * Broken Tasks — decompositor de missões.
 *
 * Recebe uma tarefa grande e devolve subtarefas acionáveis usando a API do
 * Google Gemini (free tier). Configure GEMINI_API_KEY no ambiente
 * (chave gratuita em https://aistudio.google.com/apikey). Sem chave,
 * respondemos 503 e o front explica como ativar o módulo.
 */

type Subtarefa = { titulo: string; detalhe?: string; estimativa?: string };

const MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash";

const PROMPT_SISTEMA = `Você é um decompositor tático de tarefas de um sistema de produtividade.
Receberá uma tarefa grande (missão) em português e deve quebrá-la em 5 a 9 subtarefas pequenas, concretas e acionáveis.

Regras:
- Cada subtarefa começa com um verbo no infinitivo e cabe em uma sessão de trabalho curta.
- Ordene do primeiro passo ao último (dependências respeitadas).
- "detalhe" é opcional: uma frase curta que remove ambiguidade.
- "estimativa" é opcional: tempo aproximado (ex.: "15min", "1h").
- Não invente requisitos que não estão na missão.

Responda SOMENTE com JSON válido neste formato:
{"subtarefas":[{"titulo":"...","detalhe":"...","estimativa":"..."}]}`;

export async function POST(req: Request) {
  let body: { tarefa?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "payload" }, { status: 400 });
  }

  const tarefa = (body.tarefa ?? "").trim().slice(0, 600);
  if (tarefa.length < 8) {
    return NextResponse.json({ ok: false, error: "tarefa" }, { status: 400 });
  }

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return NextResponse.json(
      { ok: false, error: "sem-chave" },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": key,
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `${PROMPT_SISTEMA}\n\nMissão: ${tarefa}` }],
            },
          ],
          generationConfig: {
            temperature: 0.4,
            responseMimeType: "application/json",
          },
        }),
      },
    );

    if (!res.ok) throw new Error(`gemini ${res.status}`);

    const data = await res.json();
    const texto: string =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    // Remove cercas de código caso o modelo ignore o responseMimeType.
    const limpo = texto.replace(/^```(?:json)?/m, "").replace(/```\s*$/m, "");
    const parsed = JSON.parse(limpo) as { subtarefas?: Subtarefa[] };

    const subtarefas = (parsed.subtarefas ?? [])
      .filter((s) => typeof s?.titulo === "string" && s.titulo.trim())
      .slice(0, 12)
      .map((s) => ({
        titulo: String(s.titulo).slice(0, 160),
        detalhe: s.detalhe ? String(s.detalhe).slice(0, 240) : undefined,
        estimativa: s.estimativa ? String(s.estimativa).slice(0, 20) : undefined,
      }));

    if (subtarefas.length === 0) throw new Error("vazio");

    return NextResponse.json({ ok: true, subtarefas });
  } catch {
    return NextResponse.json({ ok: false, error: "decomposicao" }, { status: 502 });
  }
}
