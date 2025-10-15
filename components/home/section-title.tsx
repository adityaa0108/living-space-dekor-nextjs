export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : ""
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-primary/40" />
          <span className="uppercase tracking-[0.2em] text-xs text-foreground/60">{eyebrow}</span>
        </div>
      )}
      <h2 className="mt-4 h2-title">{title}</h2>
      {description && <p className="mt-4 body-lg text-foreground/75">{description}</p>}
    </div>
  )
}
