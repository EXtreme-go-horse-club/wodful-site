import * as React from "react";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  highlight?: string;
  index?: number;
  as?: "article" | "div";
  href?: string;
  children?: React.ReactNode;
};

const cardClass =
  "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow focus-within:border-primary/40 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary sm:p-6";

export const FeatureCard = ({
  icon,
  title,
  description,
  highlight,
  index,
  as: Tag = "article",
  href,
  children,
}: FeatureCardProps) => {
  const inner = (
    <>
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
      {index !== undefined && (
        <span className="mb-4 block font-mono text-xs font-medium text-primary/60">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/20 transition-all group-hover:bg-primary/25 group-hover:ring-primary/40">
        <img src={icon} alt="" className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      {highlight && (
        <p className="mb-2 text-sm font-medium text-primary">{highlight}</p>
      )}
      <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${cardClass} block no-underline`}>
        {inner}
      </a>
    );
  }

  return <Tag className={cardClass}>{inner}</Tag>;
};
