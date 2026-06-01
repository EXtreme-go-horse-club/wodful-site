import * as React from "react";
import Whatsapp from "../../images/whatsapp2.svg";
import { WHATSAPP_URL } from "../../constants/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export const FinalCta = () => (
  <section
    id="cta"
    aria-labelledby="cta-title"
    className="relative overflow-x-clip border-t border-white/10 py-14 sm:py-20 md:py-28"
  >
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(49,151,149,0.2),transparent)]"
      aria-hidden
    />
    <Container className="relative text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:tracking-[0.2em]">
        Próximo passo
      </p>
      <h2
        id="cta-title"
        className="mx-auto mb-4 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
      >
        Seu próximo evento merece uma operação à altura
      </h2>
      <p className="mx-auto mb-8 max-w-xl px-1 text-base leading-relaxed text-gray-300 sm:mb-10 sm:text-lg">
        Conte o tamanho da sua competição. A gente mostra como a Wodful pode
        simplificar inscrições, dia de prova e experiência do público.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto block w-full max-w-sm rounded-md no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:max-w-xs"
      >
        <Button
          variant="whatsapp"
          className="w-full min-h-[48px] gap-3 px-6 py-4 text-base shadow-glow sm:text-lg"
        >
          <img src={Whatsapp} className="h-6 w-6 shrink-0" alt="" aria-hidden />
          Quero conhecer a Wodful
        </Button>
      </a>
      <p className="mt-6 px-2 text-sm leading-relaxed text-gray-400">
        Resposta rápida · Sem compromisso · Feito para o universo CrossFit
      </p>
    </Container>
  </section>
);
