import { Player } from "@lottiefiles/react-lottie-player";
import { navigate } from "gatsby";
import * as React from "react";
import * as styles from "./styles.module.css";

export const Success = () => (
  <section className={styles.container}>
    <Player
      autoplay
      keepLastFrame
      src="https://lottie.host/41a3108f-baaf-40eb-9c73-9043890130cb/I9hOxhavci.json"
      style={{ height: "240px", width: "240px" }}
    ></Player>

    <h3>Pagamento confirmado!</h3>
    <p>
      Sua inscrição foi concluída com sucesso e já está garantida. Fique de olho
      no seu celular e nas nossas redes sociais para receber novidades sobre o
      evento.
    </p>

    <button type="button" onClick={() => navigate("/")}>
      Voltar
    </button>
  </section>
);
