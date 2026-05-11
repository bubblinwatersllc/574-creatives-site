type Props = {
  children: React.ReactNode;
  number?: string;
};

export default function SectionLabel({ children, number }: Props) {
  return (
    <div className="flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-ember-300/80">
      {number && (
        <span className="text-ember-500/70 font-display text-sm">{number}</span>
      )}
      <span className="h-px w-8 bg-ember-500/40" />
      <span>{children}</span>
    </div>
  );
}
