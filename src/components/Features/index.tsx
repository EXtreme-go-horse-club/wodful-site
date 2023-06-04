import * as React from "react";
import Arrows from "../../images/arrows.svg";
import Calendar from "../../images/calendar.svg";
import Certificate from "../../images/certificate.svg";
import Clock from "../../images/clock.svg";
import Ticket from "../../images/ticket.svg";
import Trophy from "../../images/trophy.svg";
import * as styles from "./styles.module.css";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Certificate,
    title: "Gerenciamento de inscrições simplificado",
    description:
      "Permita que os atletas se inscrevam com facilidade e organize os participantes com eficiência.",
  },
  {
    icon: Trophy,
    title: "Pontuação e Leaderboard em tempo real",
    description:
      "Acompanhe o desempenho dos atletas e mantenha o público envolvido com rankings atualizados em tempo real.",
  },
  {
    icon: Ticket,
    title: "Venda de ingressos e lotes",
    description:
      "Otimize as vendas de ingressos e defina lotes para atrair o público certo.",
  },
  {
    icon: Calendar,
    title: "Cronograma dinâmico",
    description:
      "Adapte-se rapidamente a mudanças de horário e mantenha todos informados com um cronograma atualizado automaticamente.",
  },
  {
    icon: Arrows,
    title: "Atualizações em tempo real",
    description:
      "Fique por dentro do progresso da competição, saiba quais raias estão acontecendo e acompanhe o cronograma a distância.",
  },
  {
    icon: Clock,
    title: "Otimização do tempo",
    description:
      "Planeje seu dia com mais eficiência, sabendo exatamente quando suas provas estão programadas e quanto tempo você tem para se preparar.",
  },
];

export const Feature = () => (
  <section className={styles.container}>
    <h1>Funcionalidades</h1>
    <section className={styles.section}>
      {features.map((feat) => (
        <article key={feat.title}>
          <img src={feat.icon} alt={`ícone de ${feat.title}`} />
          <h2 className={styles.sub_title}>{feat.title}</h2>
          <p>{feat.description}</p>
        </article>
      ))}
    </section>
  </section>
);
