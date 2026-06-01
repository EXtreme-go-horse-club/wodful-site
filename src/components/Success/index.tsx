import { navigate } from "gatsby";
import * as React from "react";
import { LottiePlayer } from "../LottiePlayer";
import * as styles from "./styles.module.css";

type ReturnStatus = "success" | "pending" | "failure";

interface SuccessProps {
  status?: ReturnStatus;
  accessCode?: string;
}

const LOTTIE_BY_STATUS: Record<ReturnStatus, string> = {
  success:
    "https://lottie.host/41a3108f-baaf-40eb-9c73-9043890130cb/I9hOxhavci.json",
  pending:
    "https://lottie.host/d76de692-2677-4679-9245-df44bdf74851/oK0dmlMmMt.json",
  failure:
    "https://lottie.host/938aaa0c-c767-4467-9d8d-518274fdfb6a/DNDJrpvTkh.json",
};

const content: Record<ReturnStatus, { title: string; message: string }> = {
  success: {
    title: "Pagamento confirmado!",
    message:
      "Sua inscrição foi concluída com sucesso e já está garantida. Fique de olho no seu celular e nas nossas redes sociais para receber novidades sobre o evento.",
  },
  pending: {
    title: "Pagamento pendente",
    message:
      "Seu pagamento está em análise. Assim que for confirmado, sua inscrição será aprovada e você receberá uma confirmação por e-mail.",
  },
  failure: {
    title: "Pagamento não aprovado",
    message:
      "Não foi possível concluir seu pagamento. Você pode tentar novamente ou escolher outra forma de pagamento.",
  },
};

export const Success = ({ status = "success", accessCode }: SuccessProps) => {
  const { title, message } = content[status];
  const backPath = accessCode ? `/event/${accessCode}/` : "/";

  return (
    <section className={styles.container}>
      <LottiePlayer
        src={LOTTIE_BY_STATUS[status]}
        style={{ height: "240px", width: "240px" }}
      />
      <h3>{title}</h3>
      <p>{message}</p>

      <button type="button" onClick={() => navigate(backPath)}>
        Voltar
      </button>
    </section>
  );
};
