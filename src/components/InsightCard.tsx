interface InsightCardProps {
  title: string;
  description: string;
}

export function InsightCard({ title, description }: InsightCardProps) {
  return (
    <div className="border border-neutral-800 bg-[#0c0b09] p-5">
      <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">Focus</p>
      <h4 className="mt-3 text-xl font-[family-name:var(--font-display)] text-amber-100">
        {title}
      </h4>
      <p className="mt-3 text-sm text-neutral-300/90 leading-relaxed">{description}</p>
    </div>
  );
}
