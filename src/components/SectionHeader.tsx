import { Ornament } from "./Ornament";

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-4">
      <p className="text-xs uppercase tracking-[0.5em] text-amber-300/80">{label}</p>
      <h2 className="text-4xl font-[family-name:var(--font-display)] text-amber-100 sm:text-5xl">
        {title}
      </h2>
      <Ornament className="h-5 w-56 text-amber-400" />
      <p className="max-w-2xl text-base text-neutral-300/90 sm:text-lg">{description}</p>
    </div>
  );
}
