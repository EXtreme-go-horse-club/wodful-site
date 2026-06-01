import * as React from "react";
import ClockWise from "../../images/clock-wise.svg";
import Person from "../../images/person-arms.svg";
import Strategy from "../../images/strategy.svg";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

type Benefit = {
  icon: string;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: Strategy,
    title: "Baterias e raias no automático",
    description:
      "A competição evolui e a plataforma acompanha. Você não fica recalculando bateria na mão entre um prova e outra.",
  },
  {
    icon: Person,
    title: "Produto que não para",
    description:
      "Melhorias contínuas com quem vive o ecossistema CrossFit. Feedback de organizadores vira funcionalidade de verdade.",
  },
  {
    icon: ClockWise,
    title: "Suporte de quem entende",
    description:
      "Dúvida no dia do evento? Fale com gente que já passou pelo mesmo stress de produção e sabe a urgência.",
  },
];

export const Benefits = () => (
  <Section id="benefits" className="bg-white/[0.02]" aria-labelledby="benefits-heading">
    <Container>
      <SectionHeading
        id="benefits-heading"
        className="mb-10 sm:mb-14 md:mb-16"
        eyebrow="Diferenciais Wodful"
        title="Por que organizadores escolhem a gente"
        description="Não é só software. É parceria para o seu evento sair redondo do planejamento ao pódio."
      />
      <ul className="grid list-none gap-5 p-0 md:grid-cols-3 md:gap-6">
        {benefits.map((benefit) => (
          <li key={benefit.title}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-primary/10 to-transparent p-6 transition-all duration-300 hover:border-primary/35 hover:shadow-glow sm:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/25 sm:mb-6 sm:h-14 sm:w-14">
                <img
                  src={benefit.icon}
                  alt=""
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  aria-hidden
                />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white sm:text-xl">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                {benefit.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);
