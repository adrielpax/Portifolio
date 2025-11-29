import type { NextApiRequest, NextApiResponse } from 'next';

const dbLib = require('@/src/lib/db');

interface ProjectData {
  title: string;
  description?: string;
  imageUrl?: string;
  tags?: string;
  link?: string;
}

interface ApiResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'GET') {
      const projects = dbLib.getProjects(100);
      return res.status(200).json({ success: true, data: projects });

    } else if (req.method === 'POST') {
      const { title, description, imageUrl, tags, link }: ProjectData = req.body;

      if (!title) {
        return res.status(400).json({ success: false, error: 'Título é obrigatório' });
      }

      const id = dbLib.insertProject({ title, description, imageUrl, tags, link });
      return res.status(201).json({ success: true, data: { id, title, description, imageUrl, tags, link } });

    } else if (req.method === 'PUT') {
      const { id, title, description, imageUrl, tags, link }: ProjectData & { id: number } = req.body;

      if (!id || !title) {
        return res.status(400).json({ success: false, error: 'ID e título são obrigatórios' });
      }

      dbLib.updateProject(id, { title, description, imageUrl, tags, link });
      return res.status(200).json({ success: true, data: { id, title, description, imageUrl, tags, link } });

    } else if (req.method === 'DELETE') {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ success: false, error: 'ID é obrigatório' });
      }

      dbLib.deleteProject(Number(id));
      return res.status(200).json({ success: true, data: { id } });

    } else {
      return res.status(405).json({ success: false, error: `Método ${req.method} não permitido` });
    }
  } catch (error) {
    console.error('Erro na API de projetos:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro interno do servidor';
    return res.status(500).json({ success: false, error: errorMessage });
  }
}
