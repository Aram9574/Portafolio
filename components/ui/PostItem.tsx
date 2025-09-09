export default function PostItem({ title, meta, href }:{ title:string; meta:string; href:string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-xl border border-white/10 bg-white/5 hover:translate-y-[-2px] transition">
      <div className="font-medium">{title}</div>
      <div className="text-xs text-muted-foreground mt-1">{meta}</div>
    </a>
  );
}

