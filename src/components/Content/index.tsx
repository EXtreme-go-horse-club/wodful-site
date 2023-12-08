import * as React from "react";
import * as styles from "./styles.module.css";
import { Link } from "gatsby";
import Sistem from "../../images/sistem.svg";

export const Content = () => (
  <main className={styles.main}>
    <section className={styles.section}>
      <article className={styles.container}>
        <h1 className={styles.title}>Gerencie seu evento de Crossfit</h1>
        <p className={styles.text}>
          Eleve o nível do seu evento de CrossFit com o
          <strong> Sistema de Scoreboard </strong>
          inovador da Wodful e acompanhe o andamento da sua competição de
          qualquer lugar em tempo real
        </p>
        <Link to="#contact">
          <button className={styles.button_cta} type="button">
            Entrar em contato
          </button>
        </Link>
      </article>

      <img src={Sistem} className={styles.capa} alt="Capa do sistema" />
    </section>
  </main>
);
