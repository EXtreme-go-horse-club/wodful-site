import { Player } from "@lottiefiles/react-lottie-player";
import { navigate } from "gatsby";
import * as React from "react";
import * as styles from "./styles.module.css";

type ReturnStatus = "success" | "pending" | "failure";

interface SuccessProps {
  status?: ReturnStatus;
  /** accessCode do evento para o botão Voltar levar à página de inscrição */
  accessCode?: string;
}

const LOTTIE_SUCCESS =
  "https://lottie.host/41a3108f-baaf-40eb-9c73-9043890130cb/I9hOxhavci.json";

const content: Record<
  ReturnStatus,
  { title: string; message: string }
> = {
  success: {
    title: "Pagamento confirmado!",
    message:
      "Sua inscrição foi concluída com sucesso e já está garantida. Fique de olho no seu celular e nas nossas redes sociais para receber novidades sobre o evento.",
  },
  pending: {
    title: "Pagamento pendente",
    message:
      "Seu pagamento está em análise. Assim que for confirmado, sua inscrição será aprovada. Você receberá uma confirmação por e-mail.",
  },
  failure: {
    title: "Pagamento não aprovado",
    message:
      "Não foi possível concluir seu pagamento. Você pode tentar novamente ou escolher outra forma de pagamento.",
  },
};

function IconWarning() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 120, height: 120, color: "var(--warning-color, #f59e0b)" }}
      aria-hidden
    >
      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      <path d="M12 15v.01" />
    </svg>
  );
}

function IconError() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 120, height: 120, color: "var(--error-color, #dc2626)" }}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
  );
}

export const Success = ({ status = "success", accessCode }: SuccessProps) => {
  const { title, message } = content[status];
  const backPath = accessCode ? `/event/${accessCode}/` : "/";

  return (
    <section className={styles.container}>
      {status === "success" && (
        <Player
          autoplay
          keepLastFrame
          src={LOTTIE_SUCCESS}
          style={{ height: "240px", width: "240px" }}
        />
      )}
      {status === "pending" && (
        <div style={{ marginBottom: "0.5rem" }}>
          <IconWarning />
        </div>
      )}
      {status === "failure" && (
        <div style={{ marginBottom: "0.5rem" }}>
          <IconError />
        </div>
      )}

      <h3>{title}</h3>
      <p>{message}</p>

      <button type="button" onClick={() => navigate(backPath)}>
        Voltar
      </button>
    </section>
  );
};
