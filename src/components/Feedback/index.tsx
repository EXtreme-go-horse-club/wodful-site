import { Player } from "@lottiefiles/react-lottie-player";
import { navigate } from "gatsby";
import * as React from "react";
import * as styles from "./styles.module.css";

interface FeedbackTypes {
  type?: "success" | "error";
  closeModal: () => void;
  link: string | null;
}

export const Feedback = ({
  type = "success",
  closeModal,
  link,
}: FeedbackTypes) => (
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
    <h3>
      {type === "success"
        ? "Pré-inscrição realizada!"
        : "Erro ao realizar a pré-inscrição!"}
    </h3>
    <p>
      {type === "success"
        ? "Sua pré-inscrição foi realizada com sucesso. Siga para o pagamento para finalizar a inscrição."
        : "Não foi possível realizar a sua pré-inscrição, tente novamente mais tarde."}
    </p>

    {link ? (
      <button
        style={{
          padding: "16px",
          marginTop: "40px",
        }}
        type="button"
        onClick={
          type === "success"
            ? () =>
                navigate(link, {
                  replace: true,
                })
            : () => closeModal()
        }
      >
        {type === "success" ? "Seguir com pagamento" : "Fechar"}
      </button>
    ) : (
      type === "error" ? (
        <>
          <button
            style={{
              padding: "16px",
              marginTop: "24px",
            }}
            type="button"
            onClick={() => {
              const whatsappNumber = "554598070615";
              const text = "Tive problemas na inscrição, preciso de ajuda";
              const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                text
              )}`;

              window.open(url, "_blank", "noopener,noreferrer");
            }}
          >
            Entrar em contato
          </button>

          <button
            style={{
              padding: "16px",
              marginTop: "12px",
              background: "transparent",
              boxShadow: "none",
              color: "#319795",
            }}
            type="button"
            onClick={() => closeModal()}
          >
            Fechar
          </button>
        </>
      ) : (
        <button
          style={{
            padding: "16px",
            marginTop: "40px",
          }}
          type="button"
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
      )
    )}
  </section>
);
