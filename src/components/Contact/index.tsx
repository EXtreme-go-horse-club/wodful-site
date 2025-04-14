import * as React from "react";
import CrossColab from "../../images/cross-colab.svg";
import Whatsapp from "../../images/whatsapp2.svg";
import * as styles from "./styles.module.css";

export const Contact = () => {
  const message = "Olá, gostaria de saber mais sobre a WODFUL!";
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const onSubmit = async () => {
    const link = `https://wa.me/554598070615?text=${message}`;
    window.open(link, "_blank");
    setIsDisabled(true);

    setTimeout(() => setIsDisabled(false), 5000);
  };

  return (
    <section id="contact" className={styles.container}>
      <article className={styles.section_input}>
        <h1 className={styles.h1}>Contato</h1>
        <p className={styles.text}>
          Estamos aqui para transformar a maneira como você gerencia e organiza
          sua competição. Clique no botão abaixo e saiba como a{" "}
          <b style={{ color: "#141414" }}>WODFUL</b> pode fazer a diferença no
          seu evento.
        </p>

        <button
          type="button"
          disabled={isDisabled}
          className={styles.button}
          onClick={() => onSubmit()}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <img
            src={Whatsapp}
            style={{
              width: "2rem",
            }}
            alt="Ícone do whatsapp"
          />
          <span>Entrar em contato</span>
        </button>
      </article>

      <section className={styles.section_img}>
        <img src={CrossColab} className={styles.img} alt="Banner da Wodful" />
      </section>
    </section>
  );
};
