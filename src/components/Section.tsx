import { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  dark?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  dark
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 ${
        dark ? "bg-quai-navy" : "bg-slate-950"
      } border-b border-slate-800`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold tracking-[0.2em] text-quai-teal uppercase mb-2">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-slate-300 leading-relaxed">{description}</p>
          )}
        </header>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}


