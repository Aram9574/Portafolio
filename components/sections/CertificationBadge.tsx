import type { CertificationItem } from "@/lib/data/education";
import { Award } from "lucide-react";

export default function CertificationBadge({ title, issuer, year, note, link }: CertificationItem) {
  const content = (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 hover:border-emerald-400/40 transition">
      <Award className="w-4 h-4 text-emerald-400" />
      <span className="text-sm">{title}</span>
      <span className="text-xs text-gray-400">· {issuer}{year ? ` (${year})` : ''}</span>
    </div>
  );
  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer">{content}</a>;
  }
  return content;
}

