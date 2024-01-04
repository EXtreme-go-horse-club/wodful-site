import { Player } from "@lottiefiles/react-lottie-player";
import { navigate } from "gatsby";
import * as React from "react";
import * as styles from "./styles.module.css";

interface FeedbackTypes {
  type?: "success" | "error";
  closeModal: () => void;
}

export const Feedback = ({ type = "success", closeModal }: FeedbackTypes) => (
  <section className={styles.container}>
    <Player
      autoplay
      keepLastFrame
      src={`${
        type === "success"
          ? "https://lottie.host/41a3108f-baaf-40eb-9c73-9043890130cb/I9hOxhavci.json"
          : "https://lottie.host/938aaa0c-c767-4467-9d8d-518274fdfb6a/DNDJrpvTkh.json"
      }`}
      style={{ height: "240px", width: "240px" }}
    ></Player>
    <h3 className={styles.h3}>
      {type === "success"
        ? "Inscrição realizada!"
        : "Erro ao realizar a inscrição!"}
    </h3>
    <p className={styles.p}>
      {type === "success"
        ? "Acompanhe as nossas redes sociais para novidades e dicas sobre o evento."
        : "Não foi possível realizar a sua inscrição, tente novamente mais tarde."}
    </p>

    <button
      style={{
        padding: "16px",
        marginTop: "40px",
      }}
      type="button"
      onClick={type === "success" ? () => navigate("/") : () => closeModal()}
    >
      {type === "success" ? "Voltar para o site" : "Fechar"}
    </button>
  </section>
);
