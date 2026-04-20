import type { CertificationItem } from "@/lib/data/education";
import { Award } from "lucide-react";

export default function CertificationBadge({ title, issuer, year, note, link }: CertificationItem) {
  const content = (
    <div className="inline-flex items-center gap-2 border border-rule bg-paper px-3 py-2 hover:bg-bone transition">
      <Award className="w-4 h-4 text-emerald-400" />
      <span className="text-sm text-ink">{title}</span>
      <span className="text-xs text-muted">· {issuer}{year ? ` (${year})` : ''}</span>
    </div>
  );
  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer">{content}</a>;
  }
  return content;
}
