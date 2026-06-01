import * as React from "react";
import { Container } from "../ui/Container";

const stats = [
  {
    value: "Tempo real",
    label: "Leaderboard e cronograma sempre atualizados na tela",
  },
  {
    value: "Menos stress",
    label: "Chega de planilha, grupo de WhatsApp e retrabalho no dia do evento",
  },
  {
    value: "Um só lugar",
    label: "Inscrições, pagamentos, raias e scoreboard integrados",
  },
];

export const Stats = () => (
  <section
    className="relative border-y border-white/[0.06] bg-white/[0.02] py-10 sm:py-12 md:py-14"
    aria-label="Resumo dos benefícios"
  >
    <Container>
      <ul className="list-none divide-y divide-white/10 p-0 md:grid md:grid-cols-3 md:gap-6 md:divide-y-0">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="px-1 py-8 text-center first:pt-0 last:pb-0 md:border-r md:border-white/10 md:px-4 md:py-0 md:last:border-r-0"
          >
            <p className="mb-2 text-xl font-bold text-primary sm:text-2xl md:text-3xl">
              {stat.value}
            </p>
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-400">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
