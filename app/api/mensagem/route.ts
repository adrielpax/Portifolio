import { NextResponse } from "next/server";

/**
 * Canal de mensagens do portfólio.
 *
 * O visitante envia pelo Módulo de contato e a mensagem é empurrada em tempo
 * real para o webhook configurado em CONTACT_WEBHOOK_URL (Discord, Slack ou
 * qualquer endpoint compatível) — que notifica o Adriel no celular/desktop.
 * Sem webhook configurado, respondemos 503 e o front oferece o chat como
 * caminho alternativo, para nenhuma mensagem se perder em silêncio.
 */
export async function POST(req: Request) {
  let body: { nome?: string; contato?: string; mensagem?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "payload" }, { status: 400 });
  }

  const nome = (body.nome ?? "").trim().slice(0, 80);
  const contato = (body.contato ?? "").trim().slice(0, 120);
  const mensagem = (body.mensagem ?? "").trim().slice(0, 2000);

  if (!nome || !contato || !mensagem) {
    return NextResponse.json({ ok: false, error: "campos" }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      { ok: false, error: "canal-indisponivel" },
      { status: 503 },
    );
  }

  const texto = [
    "📨 Nova mensagem no portfólio",
    `— De: ${nome}`,
    `— Contato: ${contato}`,
    "",
    mensagem,
  ].join("\n");

  // Discord espera { content }; Slack espera { text }.
  const payload = webhook.includes("hooks.slack.com")
    ? { text: texto }
    : { content: texto };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
  } catch {
    return NextResponse.json({ ok: false, error: "entrega" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
