import type { NextApiRequest, NextApiResponse } from 'next';
import { ContactForm, ContactResponse, ContactsResponse } from '@/src/types';

// Use local SQLite DB via src/lib/db.ts
const dbLib = require('../../src/lib/db');
const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;

async function sendToMakeWebhook(payload: ContactForm): Promise<void> {
  if (!MAKE_WEBHOOK_URL) {
    throw new Error('MAKE_WEBHOOK_URL não configurada no .env.local');
  }

  const response = await fetch(MAKE_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`Make webhook falhou (${response.status}): ${text || 'sem detalhes'}`);
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
      let contactData: Partial<ContactForm>;
      try {
        contactData = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      } catch {
        return res.status(400).json({ success: false, error: 'JSON inválido no corpo da requisição' });
      }

      const name = contactData.name?.trim() || '';
      const email = contactData.email?.trim() || '';
      const contact = contactData.contact?.toString().trim() || '';
      const message = contactData.message?.trim() || '';

      // Validações básicas
      if (!name || !email || !contact || !message) {
        return res.status(400).json({ success: false, error: 'Nome, email, celular e mensagem são obrigatórios' });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, error: 'Email inválido' });
      }

      const timestamp = contactData.timestamp || new Date().toLocaleString('pt-BR');
      const payload: ContactForm = { name, email, contact, message, timestamp };

      // Envia de forma direta para o Make
      await sendToMakeWebhook(payload);

      // Persistência local é opcional e não deve impedir o envio para webhook
      try {
        dbLib.insertContact(payload);
      } catch (dbError) {
        console.warn('Falha ao salvar contato localmente:', dbError);
      }

      return res.status(200).json({ success: true, message: 'Contato enviado com sucesso' } as ContactResponse);
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
