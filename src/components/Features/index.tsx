import * as React from "react";
import Arrows from "../../images/arrows.svg";
import Calendar from "../../images/calendar.svg";
import Certificate from "../../images/certificate.svg";
import Clock from "../../images/clock.svg";
import Ticket from "../../images/ticket.svg";
import Trophy from "../../images/trophy.svg";
import { Container } from "../ui/Container";
import { FeatureCard } from "../ui/FeatureCard";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

type Feature = {
  icon: string;
  title: string;
  highlight: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Certificate,
    title: "Inscrições que escalam",
    highlight: "Menos fila, mais clareza",
    description:
      "Formulário online, categorias organizadas e visão completa dos participantes antes do primeiro heat.",
  },
  {
    icon: Trophy,
    title: "Scoreboard que empolga",
    highlight: "Ranking na hora",
    description:
      "Cada resultado entra no placar ao vivo. Torcida gruda na tela — e você ganha credibilidade de evento grande.",
  },
  {
    icon: Ticket,
    title: "Ingressos e lotes",
    highlight: "Venda sob controle",
    description:
      "Defina lotes, limite de vagas e acompanhe quem já garantiu a inscrição sem planilha paralela.",
  },
  {
    icon: Calendar,
    title: "Cronograma inteligente",
    highlight: "Mudou? Atualiza já",
    description:
      "Ajuste horários e raias quando o evento pedir. Atletas e staff veem a versão certa, na hora.",
  },
  {
    icon: Arrows,
    title: "Operação sincronizada",
    highlight: "Todos na mesma página",
    description:
      "Saiba o que está rolando em cada raia, do celular ou do computador — ideal para quem coordena de longe.",
  },
  {
    icon: Clock,
    title: "Dia de prova fluido",
    highlight: "Menos improviso",
    description:
      "Com tudo centralizado, sua equipe gasta energia na experiência — não apagando incêndio operacional.",
  },
];

export const Feature = () => (
  <Section id="features" aria-labelledby="features-heading">
    <Container>
      <SectionHeading
        id="features-heading"
        className="mb-10 sm:mb-14 md:mb-16"
        eyebrow="O que você ganha"
        title="Tudo que um evento de CrossFit precisa"
        description="Da primeira inscrição ao último pódio — ferramentas pensadas para quem já organizou competição e sabe onde aperta."
      />
      <ul className="grid list-none gap-5 p-0 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {features.map((feat, index) => (
          <li key={feat.title}>
            <FeatureCard
              index={index}
              icon={feat.icon}
              title={feat.title}
              highlight={feat.highlight}
              description={feat.description}
            />
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);
