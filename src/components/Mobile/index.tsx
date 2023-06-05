import * as React from "react";
import Phone from "../../images/mock-celular.svg";
import * as styles from "./styles.module.css";

export const Mobile = () => (
  <section className={styles.container}>
    <article className={styles.container_left}>
      <h1>Fácil para todos</h1>
      <p className={styles.container_left}>
        Experimente a liberdade de acompanhar sua competição de CrossFit em
        tempo real! Cadastre-se agora e descubra como nossa plataforma pode
        melhorar sua experiência.
      </p>
    </article>
    <article>
      <img className={styles.img_phone} src={Phone} alt="Ícone de celular" />
    </article>
  </section>
);
