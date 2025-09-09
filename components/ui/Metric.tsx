import { cn } from '@/lib/utils';

type MetricProps = {
  value: string;
  label: string;
  className?: string;
};
export default function Metric({ value, label, className }: MetricProps) {
  return (
    <div className={cn(
      'rounded-xl border border-white/10 bg-white/5 px-4 py-3',
      'flex items-baseline gap-2',
      className
    )}>
      <span className="text-emerald-400 text-xl font-semibold">{value}</span>
      <span className="text-sm text-gray-300">{label}</span>
    </div>
  );
}
