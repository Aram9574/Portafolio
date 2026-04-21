import type { CertificationItem } from "@/lib/data/education";
import { Award } from "lucide-react";

export default function CertificationBadge({ title, issuer, year, note, link }: CertificationItem) {
  const content = (
    <div className="flex items-center gap-2 border border-rule bg-paper px-3 py-2 hover:bg-bone transition h-full w-full">
      <Award className="w-4 h-4 text-emerald-400 shrink-0" />
      <span className="text-sm text-ink">{title}</span>
      <span className="text-xs text-muted ml-auto shrink-0">· {issuer}{year ? ` (${year})` : ''}</span>
    </div>
  );
  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">{content}</a>;
  }
  return content;
}
