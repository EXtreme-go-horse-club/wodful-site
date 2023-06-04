import * as React from "react";
import ClockWise from "../../images/clock-wise.svg";
import Person from "../../images/person-arms.svg";
import Strategy from "../../images/strategy.svg";
import * as styles from "./styles.module.css";

type Benefits = {
  icon: string;
  title: string;
  description: string;
};

const benefits: Benefits[] = [
  {
    icon: ClockWise,
    title: "Suporte ao cliente excepcional",
    description:
      "Nossa equipe está sempre pronta para ajudá-lo a resolver quaisquer problemas e responder a todas as suas perguntas.",
  },
  {
    icon: Person,
    title: "Atualizações contínuas",
    description:
      "Estamos constantemente aprimorando nosso produto para oferecer a melhor experiência aos nossos usuários.",
  },
  {
    icon: Strategy,
    title: "Baterias e raias dinâmicas",
    description:
      "Não perca tempo ajustando baias e baterias de acordo com a evolução e andamento da sua competição! Deixe que esse problema nós resolvemos para você!",
  },
];

export const Benefits = () => (
  <section id="benefits" className={styles.container}>
    <h1>Benefícios</h1>
    <section className={styles.section}>
      {benefits.map((benefit) => (
        <article key={benefit.title}>
          <img src={benefit.icon} alt={`ícone de ${benefit.title}`} />
          <h2 className={styles.sub_title}>{benefit.title}</h2>
          <p>{benefit.description}</p>
        </article>
      ))}
    </section>
  </section>
);
