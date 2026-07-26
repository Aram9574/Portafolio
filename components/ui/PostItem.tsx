export default function PostItem({ title, meta, href }:{ title:string; meta:string; href:string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border border-hairline bg-paper hover:border-hairline-strong transition-colors duration-200 ease-out">
      <div className="font-medium text-ink">{title}</div>
      <div className="text-xs text-muted mt-1 font-mono">{meta}</div>
    </a>
  );
}

