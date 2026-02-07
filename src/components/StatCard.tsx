interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="border border-amber-200/20 bg-black/40 px-6 py-5">
      <p className="text-3xl font-semibold text-amber-200">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-300">{label}</p>
    </div>
  );
}
