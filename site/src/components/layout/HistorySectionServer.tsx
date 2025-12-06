import CardContents from "@/src/components/layout/CardContents";
import { HistoryItem } from "@/src/types";

interface HistorySectionProps {
  items: HistoryItem[];
}

function firstParagraph(md: string) {
  const parts = md.split(/\n\n+/).map(p => p.trim()).filter(Boolean);
  return parts.length ? parts[0].replace(/^#+\s*/, '') : '';
}

export default function HistorySectionServer({ items }: HistorySectionProps) {
  if (!items || items.length === 0) {
    return (
      <div className="w-full max-w-[875px]">
        <div className="flex flex-row backdrop-blur-md bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 items-center gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2 text-cyan-400">Minha História</h3>
            <p className="text-gray-400 text-sm mb-2">Nenhuma história encontrada.</p>
          </div>
        </div>
      </div>
    );
  }

  // Split each file content into sections using '---' delimiter or '## ' headings
  const cards: { title: string; summary: string; date?: string }[] = [];

  items.forEach((it) => {
    const content = it.content || '';

    // prefer explicit excerpts when present
    if (it.excerpt) {
      cards.push({ title: it.title || it.slug, summary: it.excerpt });
      return;
    }

    // split by triple-dash separator first
    const parts = content.split(/\r?\n---\r?\n/).map(p => p.trim()).filter(Boolean);

    if (parts.length === 0) return;

    if (parts.length === 1) {
      // try splitting by level-2 headings into multiple sections
      const byHeadings = parts[0].split(/\r?\n(?=##\s+)/).map(p => p.trim()).filter(Boolean);
      byHeadings.forEach((part, idx) => {
        const titleMatch = part.match(/^#{1,6}\s*(.+)/);
        const title = titleMatch ? titleMatch[1].trim() : (idx === 0 ? (it.title || it.slug) : `${it.title || it.slug} (${idx + 1})`);
        const summary = firstParagraph(part.replace(/^#{1,6}\s*.+/, '').trim() || part);
        cards.push({ title, summary });
      });
    } else {
      // multiple parts from '---'
      parts.forEach((part, idx) => {
        const titleMatch = part.match(/^#{1,6}\s*(.+)/);
        const title = titleMatch ? titleMatch[1].trim() : (idx === 0 ? (it.title || it.slug) : `${it.title || it.slug} (${idx + 1})`);
        const summary = firstParagraph(part.replace(/^#{1,6}\s*.+/, '').trim() || part);
        cards.push({ title, summary });
      });
    }
  });

  return (
    <div className="w-full max-w-[875px]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-cyan-400">Minha História</h2>
        <p className="text-white/70 text-sm">Fragmentos da minha jornada — aprendizados, desafios e conquistas.</p>
      </div>
      <CardContents items={cards} />
    </div>
  );
}
