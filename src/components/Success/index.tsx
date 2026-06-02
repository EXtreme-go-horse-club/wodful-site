import { navigate } from "gatsby";
import * as React from "react";
import { WHATSAPP_NUMBER } from "../../constants/whatsapp";
import { LottiePlayer } from "../LottiePlayer";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

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

const content: Record<
  ReturnStatus,
  { badge: string; title: string; message: string; button: string }
> = {
  success: {
    badge: "Inscrição confirmada",
    title: "Pagamento confirmado!",
    message:
      "Sua inscrição foi concluída com sucesso e já está garantida. Fique de olho no seu celular e nas nossas redes sociais para receber novidades sobre o evento.",
    button: "Voltar ao evento",
  },
  pending: {
    badge: "Aguardando confirmação",
    title: "Pagamento pendente",
    message:
      "Seu pagamento está em análise. Assim que for confirmado, sua inscrição será aprovada e você receberá uma confirmação por e-mail.",
    button: "Voltar ao evento",
  },
  failure: {
    badge: "Pagamento recusado",
    title: "Pagamento não aprovado",
    message:
      "Não foi possível concluir seu pagamento. Você pode tentar novamente ou escolher outra forma de pagamento.",
    button: "Tentar novamente",
  },
};

const badgeClasses: Record<ReturnStatus, string> = {
  success:
    "bg-emerald-50 text-emerald-700 ring-emerald-200/80",
  pending:
    "bg-amber-50 text-amber-800 ring-amber-200/80",
  failure:
    "bg-red-50 text-red-700 ring-red-200/80",
};

function supportWhatsAppUrl() {
  const text = "Tive problemas no pagamento da inscrição, preciso de ajuda";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const Success = ({ status = "success", accessCode }: SuccessProps) => {
  const { badge, title, message, button } = content[status];
  const backPath = accessCode ? `/event/${accessCode}/` : "/";
  const buttonLabel = accessCode ? button : "Voltar ao início";

  return (
    <div className="flex flex-1 flex-col bg-slate-50 text-gray-900">
      <Container className="flex flex-1 flex-col items-center justify-center py-10 sm:py-16">
        <div
          className="w-full max-w-md rounded-2xl border border-gray-200/80 bg-white p-6 shadow-lg shadow-gray-900/5 sm:p-8"
          role="status"
        >
          <div className="flex flex-col items-center text-center">
            <LottiePlayer
              src={LOTTIE_BY_STATUS[status]}
              style={{ height: "200px", width: "200px" }}
            />

            <span
              className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ${badgeClasses[status]}`}
            >
              {badge}
            </span>

            <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-[26px]">
              {title}
            </h1>

            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-gray-600">
              {message}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3">
              <Button
                type="button"
                onClick={() => navigate(backPath)}
                className="!w-full"
              >
                {buttonLabel}
              </Button>

              {status === "failure" ? (
                <a
                  href={supportWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md border border-gray-200 bg-white px-6 py-3 text-base font-medium text-gray-700 transition hover:border-primary/40 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Falar com suporte
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
