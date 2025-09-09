export default function Testimonial({ quote, name, role }:{ quote:string; name:string; role:string }) {
  return (
    <div className="h-full min-h-56 rounded-xl bg-white/5 border border-white/5 p-6 flex flex-col">
      <p className="italic">“{quote}”</p>
      <p className="mt-auto pt-4 text-sm text-muted-foreground">{name} — {role}</p>
    </div>
  );
}
