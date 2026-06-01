import * as React from "react";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ id, children, className = "" }: SectionProps) => (
  <section id={id} className={`py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}>
    {children}
  </section>
);
