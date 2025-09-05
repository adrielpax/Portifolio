import type { NextApiRequest, NextApiResponse } from 'next';
import { ContactForm, ContactResponse, ContactsResponse } from '@/src/types';

// URL do seu Google Apps Script - SUBSTITUA PELA SUA URL
const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxe-caVf29viZ6lzA7_ejNUM61j-L3gNEakpb-tlVMkfte6riSAntbr-OSnn-GsZfqV/exec';

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
      // Enviar novo contato
      const contactData: ContactForm = req.body;

      // Validar dados obrigatórios
      if (!contactData.name || !contactData.email || !contactData.message) {
        return res.status(400).json({
          success: false,
          error: 'Nome, email e mensagem são obrigatórios'
        });
      }

      // Validar email básico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactData.email)) {
        return res.status(400).json({
          success: false,
          error: 'Email inválido'
        });
      }

      // Preparar dados para envio
      const formData = new FormData();
      formData.append('name', contactData.name.trim());
      formData.append('email', contactData.email.trim());
      formData.append('message', contactData.message.trim());
      formData.append('timestamp', contactData.timestamp || new Date().toLocaleString('pt-BR'));

      // Enviar para Google Apps Script
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        return res.status(200).json({
          success: true,
          message: 'Contato enviado com sucesso!'
        });
      } else {
        throw new Error(result.error || 'Erro desconhecido no Apps Script');
      }

    } else if (req.method === 'GET') {
      // Buscar contatos existentes
      const response = await fetch(`${APPS_SCRIPT_URL}?action=getContacts`);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        return res.status(200).json({
          success: true,
          contacts: result.contacts || []
        });
      } else {
        throw new Error(result.error || 'Erro desconhecido no Apps Script');
      }

    } else {
      // Método não permitido
      return res.status(405).json({
        success: false,
        error: `Método ${req.method} não permitido`
      });
    }

  } catch (error) {
    console.error('Erro na API de contato:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Erro interno do servidor';
    
    return res.status(500).json({
      success: false,
      error: errorMessage
    });
  }
}