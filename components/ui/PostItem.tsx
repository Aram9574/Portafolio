export default function PostItem({ title, meta, href }:{ title:string; meta:string; href:string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block p-4 border border-rule bg-paper shadow-soft hover:border-ink hover:-translate-y-0.5 hover:shadow-[0_36px_80px_-32px_rgba(26,24,21,0.22),0_12px_28px_-16px_rgba(26,24,21,0.12)] transition duration-300 ease-out">
      <div className="font-medium text-ink">{title}</div>
      <div className="text-xs text-muted mt-1 font-mono">{meta}</div>
    </a>
  );
}

