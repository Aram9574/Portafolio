import { cn } from '@/lib/utils';

type MetricProps = {
  value: string;
  label: string;
  className?: string;
};
export default function Metric({ value, label, className }: MetricProps) {
  return (
    <div className={cn(
      'border border-rule bg-paper px-4 py-3 flex flex-col gap-1',
      className
    )}>
      <span className="font-display text-2xl leading-none text-ink" style={{ letterSpacing: '-0.02em' }}>{value}</span>
      <span className="text-[0.65rem] uppercase tracking-widest text-muted font-mono">{label}</span>
    </div>
  );
}
