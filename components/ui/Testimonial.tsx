export default function Testimonial({ quote, name, role }:{ quote:string; name:string; role:string }) {
  return (
    <figure className="h-full flex flex-col border-t border-[var(--ink)] pt-6">
      <blockquote className="font-display text-xl md:text-2xl leading-snug italic text-[var(--ink)]" style={{letterSpacing: '-0.01em'}}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto pt-6 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
        {name} <span className="text-[var(--ink-2)]">/</span> {role}
      </figcaption>
    </figure>
  );
}
