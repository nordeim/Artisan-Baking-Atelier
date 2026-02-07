interface JournalEntryProps {
  title: string;
  date: string;
  excerpt: string;
}

export function JournalEntry({ title, date, excerpt }: JournalEntryProps) {
  return (
    <article className="border-b border-neutral-800 pb-6">
      <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">{date}</p>
      <h3 className="mt-2 text-2xl font-[family-name:var(--font-display)] text-amber-100">
        {title}
      </h3>
      <p className="mt-3 text-sm text-neutral-300/90 leading-relaxed">{excerpt}</p>
    </article>
  );
}
