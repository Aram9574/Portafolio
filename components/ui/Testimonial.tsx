export default function Testimonial({ quote, name, role }:{ quote:string; name:string; role:string }) {
  return (
    <figure className="h-full flex flex-col border-t border-hairline pt-6">
      <blockquote className="font-display text-xl md:text-2xl leading-snug text-[var(--ink)]" style={{letterSpacing: '-0.02em'}}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto pt-6 font-mono text-xs text-[var(--muted)]">
        {name} <span className="text-[var(--ink-2)]">/</span> {role}
      </figcaption>
    </figure>
  );
}
