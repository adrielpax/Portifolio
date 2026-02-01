import type { NextApiRequest, NextApiResponse } from 'next';
import { ContactForm, ContactResponse, ContactsResponse } from '@/src/types';

// Use local SQLite DB via src/lib/db.ts
const dbLib = require('@/src/lib/db');
const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;

async function sendToMakeWebhook(payload: Record<string, any>): Promise<void> {
  if (!MAKE_WEBHOOK_URL) return;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      console.warn('Make webhook falhou:', response.status, text);
    }
  } catch (error) {
    console.warn('Make webhook erro:', error);
  } finally {
    clearTimeout(timeout);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse | ContactsResponse>
) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'POST') {
      const contactData: ContactForm = req.body;

      // Validações básicas
      if (!contactData.name || !contactData.email || !contactData.message) {
        return res.status(400).json({ success: false, error: 'Nome, email e mensagem são obrigatórios' });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactData.email)) {
        return res.status(400).json({ success: false, error: 'Email inválido' });
      }

      const timestamp = contactData.timestamp || new Date().toLocaleString('pt-BR');

      // Inserir no SQLite
      const id = dbLib.insertContact({ name: contactData.name.trim(), email: contactData.email.trim(), message: contactData.message.trim(), timestamp });

      // Enviar para Make (opcional)
      await sendToMakeWebhook({
        name: contactData.name.trim(),
        email: contactData.email.trim(),
        message: contactData.message.trim(),
        timestamp,
        source: 'portfolio',
      });

      return res.status(200).json({ success: true, message: 'Contato salvo', } as ContactResponse);

    } else if (req.method === 'GET') {
      // Retornar contatos e contador
      const limit = req.query.limit ? Number(req.query.limit) : 100;
      const contacts = dbLib.getContacts(limit);
      const count = dbLib.getContactsCount();

      return res.status(200).json({ success: true, contacts, count } as any);

    } else {
      return res.status(405).json({ success: false, error: `Método ${req.method} não permitido` });
    }
  } catch (error) {
    console.error('Erro na API de contato:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro interno do servidor';
    return res.status(500).json({ success: false, error: errorMessage });
  }
}
