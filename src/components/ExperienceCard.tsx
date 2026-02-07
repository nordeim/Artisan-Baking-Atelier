interface ExperienceCardProps {
  title: string;
  subtitle: string;
  description: string;
  meta: string;
}

export function ExperienceCard({ title, subtitle, description, meta }: ExperienceCardProps) {
  return (
    <article className="group border border-neutral-800 bg-gradient-to-br from-[#13100d] via-[#11100e] to-[#0a0907] p-6 transition duration-500 hover:border-amber-400/60 hover:shadow-[0_20px_50px_rgba(201,168,76,0.12)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">{subtitle}</p>
          <h3 className="mt-3 text-2xl font-[family-name:var(--font-display)] text-amber-100">
            {title}
          </h3>
        </div>
        <span className="text-xs text-neutral-400">{meta}</span>
      </div>
      <p className="mt-4 text-sm text-neutral-300/90 leading-relaxed">{description}</p>
      <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-amber-200">
        <span className="h-px w-10 bg-amber-200/60 transition-all duration-500 group-hover:w-16" />
        Depth Workshop
      </div>
    </article>
  );
}
