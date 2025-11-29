/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const DB_DIR = path.join(process.cwd(), 'data');
const DB_PATH = path.join(DB_DIR, 'contacts.db');
const JSON_PATH = path.join(DB_DIR, 'contacts.json');

if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

// Try to load better-sqlite3 at runtime. Use eval(require) to avoid bundler static resolution.
let Database: any = null;
try {
  // eslint-disable-next-line no-eval
  Database = eval("require")('better-sqlite3');
} catch (e) {
  Database = null;
}

if (Database) {
  const db = new Database(DB_PATH);

  // Initialize table
  db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      timestamp TEXT NOT NULL
    );
  `);

  const insertContact = ({ name, email, message, timestamp }: { name: string; email: string; message: string; timestamp: string; }) => {
    const stmt = db.prepare(`INSERT INTO contacts (name, email, message, timestamp) VALUES (?, ?, ?, ?)`);
    const info = stmt.run(name, email, message, timestamp);
    return info.lastInsertRowid;
  };

  const getContacts = (limit = 100) => {
    const stmt = db.prepare(`SELECT id, name, email, message, timestamp FROM contacts ORDER BY id DESC LIMIT ?`);
    return stmt.all(limit);
  };

  const getContactsCount = () => {
    const row = db.prepare(`SELECT COUNT(*) as cnt FROM contacts`).get();
    return row ? Number(row.cnt) : 0;
  };

  // Projects table for SQLite
  db.exec(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      imageUrl TEXT,
      tags TEXT,
      link TEXT,
      createdAt TEXT
    );
  `);

  const insertProject = ({ title, description, imageUrl, tags, link }: any) => {
    const stmt = db.prepare(`INSERT INTO projects (title, description, imageUrl, tags, link, createdAt) VALUES (?, ?, ?, ?, ?, ?)`);
    const info = stmt.run(title, description, imageUrl, tags, link, new Date().toISOString());
    return info.lastInsertRowid;
  };

  const getProjects = (limit = 100) => {
    const stmt = db.prepare(`SELECT id, title, description, imageUrl, tags, link, createdAt FROM projects ORDER BY id DESC LIMIT ?`);
    return stmt.all(limit);
  };

  const updateProject = (id: number, { title, description, imageUrl, tags, link }: any) => {
    const stmt = db.prepare(`UPDATE projects SET title = ?, description = ?, imageUrl = ?, tags = ?, link = ? WHERE id = ?`);
    return stmt.run(title, description, imageUrl, tags, link, id);
  };

  const deleteProject = (id: number) => {
    const stmt = db.prepare(`DELETE FROM projects WHERE id = ?`);
    return stmt.run(id);
  };

  module.exports = {
    insertContact,
    getContacts,
    getContactsCount,
    insertProject,
    getProjects,
    updateProject,
    deleteProject,
    DB_PATH,
    _backend: 'sqlite',
  };

} else {
  // Fallback: simple JSON file storage (no native deps required)
  if (!fs.existsSync(JSON_PATH)) {
    fs.writeFileSync(JSON_PATH, JSON.stringify([]), 'utf-8');
  }

  const readAll = () => {
    try {
      const raw = fs.readFileSync(JSON_PATH, 'utf-8');
      return JSON.parse(raw) || [];
    } catch (e) {
      return [];
    }
  };

  const writeAll = (arr: any[]) => {
    fs.writeFileSync(JSON_PATH, JSON.stringify(arr, null, 2), 'utf-8');
  };

  const insertContact = ({ name, email, message, timestamp }: { name: string; email: string; message: string; timestamp: string; }) => {
    const all = readAll();
    const id = all.length > 0 ? (all[all.length - 1].id || (all.length)) + 1 : 1;
    const item = { id, name, email, message, timestamp };
    all.push(item);
    writeAll(all);
    return id;
  };

  const getContacts = (limit = 100) => {
    const all = readAll();
    return all.slice(-limit).reverse();
  };

  const getContactsCount = () => {
    const all = readAll();
    return all.length;
  };

  // Projects fallback (JSON)
  const PROJECTS_PATH = path.join(DB_DIR, 'projects.json');
  if (!fs.existsSync(PROJECTS_PATH)) {
    fs.writeFileSync(PROJECTS_PATH, JSON.stringify([]), 'utf-8');
  }

  const readProjects = () => {
    try {
      const raw = fs.readFileSync(PROJECTS_PATH, 'utf-8');
      return JSON.parse(raw) || [];
    } catch (e) {
      return [];
    }
  };

  const writeProjects = (arr: any[]) => {
    fs.writeFileSync(PROJECTS_PATH, JSON.stringify(arr, null, 2), 'utf-8');
  };

  const insertProject = ({ title, description, imageUrl, tags, link }: any) => {
    const projects = readProjects();
    const id = projects.length > 0 ? (projects[projects.length - 1].id || projects.length) + 1 : 1;
    const item = { id, title, description, imageUrl, tags, link, createdAt: new Date().toISOString() };
    projects.push(item);
    writeProjects(projects);
    return id;
  };

  const getProjects = (limit = 100) => {
    const projects = readProjects();
    return projects.slice(-limit).reverse();
  };

  const updateProject = (id: number, { title, description, imageUrl, tags, link }: any) => {
    const projects = readProjects();
    const idx = projects.findIndex((p: any) => p.id === id);
    if (idx >= 0) {
      projects[idx] = { ...projects[idx], title, description, imageUrl, tags, link };
      writeProjects(projects);
    }
  };

  const deleteProject = (id: number) => {
    const projects = readProjects();
    writeProjects(projects.filter((p: any) => p.id !== id));
  };

  module.exports = {
    insertContact,
    getContacts,
    getContactsCount,
    insertProject,
    getProjects,
    updateProject,
    deleteProject,
    DB_PATH: JSON_PATH,
    _backend: 'json',
  };
}
