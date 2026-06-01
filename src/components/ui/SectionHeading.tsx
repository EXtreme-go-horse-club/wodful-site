import * as React from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export const SectionHeading = ({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) => (
  <header
    className={`max-w-3xl ${
      align === "left" ? "text-left" : "mx-auto text-center"
    } ${className}`}
  >
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:tracking-[0.2em]">
      {eyebrow}
    </p>
    <h2
      id={id}
      className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-[2.75rem]"
    >
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
        {description}
      </p>
    )}
  </header>
);
