import * as React from "react";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  organization: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "O placar ao vivo virou parte do show. O público parou de me perguntar 'quem está ganhando?' — está tudo na tela.",
    name: "Rafael M.",
    role: "Organizador",
    organization: "CrossFit Interior Open",
  },
  {
    quote:
      "Abri inscrições numa sexta e no domingo já tinha lista organizada por categoria. Isso antes me tomava dias.",
    name: "Camila S.",
    role: "Head Coach",
    organization: "Box Alliance",
  },
  {
    quote:
      "Atrasamos 40 minutos e conseguimos remontar o cronograma sem gritaria no grupo. Todo mundo viu a atualização no app.",
    name: "Bruno T.",
    role: "Diretor de eventos",
    organization: "South Games",
  },
];

const StarRating = () => (
  <div className="mb-4 flex gap-0.5" role="img" aria-label="Avaliação: 5 de 5 estrelas">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className="h-4 w-4 text-primary"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const Testimonials = () => (
  <Section id="testimonials" aria-labelledby="testimonials-heading">
    <Container>
      <SectionHeading
        id="testimonials-heading"
        className="mb-10 sm:mb-14 md:mb-16"
        eyebrow="Na prática"
        title="Quem já rodou evento com a Wodful"
        description="Histórias reais de quem trocou planilha e improviso por operação profissional."
      />

      <ul className="grid list-none gap-5 p-0 md:grid-cols-3 md:gap-8">
        {testimonials.map((item) => (
          <li key={item.name}>
            <blockquote className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-5 sm:p-6">
              <div
                className="pointer-events-none absolute left-4 top-3 font-serif text-5xl leading-none text-primary/20 sm:left-6 sm:top-4 sm:text-6xl"
                aria-hidden
              >
                &ldquo;
              </div>
              <div className="relative">
                <StarRating />
                <p className="mb-6 text-sm leading-relaxed text-gray-200 sm:text-base">
                  {item.quote}
                </p>
              </div>
              <footer className="mt-auto border-t border-white/10 pt-4">
                <cite className="not-italic">
                  <span className="block font-semibold text-white">{item.name}</span>
                  <span className="mt-0.5 block text-sm text-gray-400">
                    {item.role} · {item.organization}
                  </span>
                </cite>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);
