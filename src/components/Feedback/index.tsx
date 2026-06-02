import { navigate } from "gatsby";
import * as React from "react";
import { WHATSAPP_NUMBER } from "../../constants/whatsapp";
import { LottiePlayer } from "../LottiePlayer";
import { Button } from "../ui/Button";

interface FeedbackTypes {
  type?: "success" | "error";
  closeModal: () => void;
  link: string | null;
}

const LOTTIE_SUCCESS =
  "https://lottie.host/41a3108f-baaf-40eb-9c73-9043890130cb/I9hOxhavci.json";

const LOTTIE_ERROR =
  "https://lottie.host/938aaa0c-c767-4467-9d8d-518274fdfb6a/DNDJrpvTkh.json";

function supportWhatsAppUrl() {
  const text = "Tive problemas na inscrição, preciso de ajuda";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const Feedback = ({
  type = "success",
  closeModal,
  link,
}: FeedbackTypes) => (
  <section className="flex w-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-lg shadow-gray-900/10 sm:p-10">
    <LottiePlayer
      src={type === "success" ? LOTTIE_SUCCESS : LOTTIE_ERROR}
      style={{ height: "200px", width: "200px" }}
    />

    <h3 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
      {type === "success"
        ? "Pré-inscrição realizada!"
        : "Erro ao realizar a pré-inscrição!"}
    </h3>

    <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-gray-600">
      {type === "success"
        ? "Sua pré-inscrição foi realizada com sucesso. Siga para o pagamento para finalizar a inscrição."
        : "Não foi possível realizar a sua pré-inscrição, tente novamente mais tarde."}
    </p>

    <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
      {link ? (
        <Button
          type="button"
          onClick={
            type === "success"
              ? () => navigate(link, { replace: true })
              : () => closeModal()
          }
          className="!w-full"
        >
          {type === "success" ? "Seguir com pagamento" : "Fechar"}
        </Button>
      ) : type === "error" ? (
        <>
          <Button
            type="button"
            onClick={() =>
              window.open(supportWhatsAppUrl(), "_blank", "noopener,noreferrer")
            }
            className="!w-full"
          >
            Entrar em contato
          </Button>
          <button
            type="button"
            onClick={() => closeModal()}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md px-6 py-3 text-base font-medium text-primary transition hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Fechar
          </button>
        </>
      ) : (
        <Button type="button" onClick={() => navigate("/")} className="!w-full">
          Voltar
        </Button>
      )}
    </div>
  </section>
);
