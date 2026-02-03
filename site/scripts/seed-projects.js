#!/usr/bin/env node
/**
 * Script para popular dados iniciais no SQLite/JSON
 * Execute com: node scripts/seed-projects.js
 */

const fs = require('fs');
const path = require('path');

// Mock projects data
const mockProjects = [
  {
    title: 'E-commerce Platform',
    description: 'Plataforma de e-commerce completa com Next.js, Stripe e Firebase.',
    imageUrl: 'https://via.placeholder.com/300x200?text=Ecommerce',
    tags: 'Next.js, React, Stripe, Firebase',
    link: 'https://github.com/adrielpax/ecommerce',
  },
  {
    title: 'Task Manager App',
    description: 'Aplicativo de gerenciamento de tarefas com sincronização em tempo real.',
    imageUrl: 'https://via.placeholder.com/300x200?text=Tasks',
    tags: 'React, Firebase, TypeScript',
    link: 'https://github.com/adrielpax/task-manager',
  },
  {
    title: 'Weather Dashboard',
    description: 'Dashboard de clima inteligente com previsões e integração com OpenWeather API.',
    imageUrl: 'https://via.placeholder.com/300x200?text=Weather',
    tags: 'React, API, Charts',
    link: 'https://github.com/adrielpax/weather-dashboard',
  },
  {
    title: 'CMS Headless',
    description: 'Sistema de gerenciamento de conteúdo sem acoplamento com banco de dados customizável.',
    imageUrl: 'https://via.placeholder.com/300x200?text=CMS',
    tags: 'Node.js, Express, MongoDB',
    link: 'https://github.com/adrielpax/headless-cms',
  },
  {
    title: 'Chat Application',
    description: 'Aplicativo de chat em tempo real com WebSocket e autenticação JWT.',
    imageUrl: 'https://via.placeholder.com/300x200?text=Chat',
    tags: 'Node.js, WebSocket, React',
    link: 'https://github.com/adrielpax/chat-app',
  },
  {
    title: 'Portifolio Website',
    description: 'Este próprio portfólio com Next.js, Markdown e SQLite.',
    imageUrl: 'https://via.placeholder.com/300x200?text=Portfolio',
    tags: 'Next.js, Markdown, SQLite',
    link: 'https://github.com/adrielpax/portfolio',
  },
];

try {
  // Utilize o DB lib
  const dbLib = require('../src/lib/db');

  mockProjects.forEach(project => {
    try {
      dbLib.insertProject(project);
      console.log(`✅ Projeto criado: ${project.title}`);
    } catch (err) {
      console.warn(`⚠️ Erro ao criar projeto ${project.title}:`, err.message);
    }
  });

  console.log(`\n✨ ${mockProjects.length} projetos populados com sucesso!`);
} catch (err) {
  console.error('❌ Erro ao popular projetos:', err.message);
  process.exit(1);
}
