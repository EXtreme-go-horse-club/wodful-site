import { Link } from "gatsby";
import * as React from "react";
import Calendar from "../../images/calendar.svg";
import Certificate from "../../images/certificate.svg";
import Trophy from "../../images/trophy.svg";
import Whatsapp from "../../images/whatsapp2.svg";
import { WHATSAPP_URL } from "../../constants/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const highlights = [
  {
    label: "Leaderboard",
    headline: "Placar ao vivo",
    description: "O público acompanha cada WOD sem refresh na planilha.",
    icon: Trophy,
    href: "#features",
  },
  {
    label: "Inscrições",
    headline: "Vagas sob controle",
    description: "Atletas se inscrevem online; você organiza categorias com clareza.",
    icon: Certificate,
    href: "#features",
  },
  {
    label: "Cronograma",
    headline: "Raias na hora",
    description: "Atrasou? Ajusta na plataforma e todo mundo vê na hora.",
    icon: Calendar,
    href: "#features",
  },
];

export const Content = () => (
  <main
    id="conteudo-principal"
    className="relative overflow-x-clip bg-blue-dark"
  >
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-10%,rgba(49,151,149,0.28),transparent_50%)]"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black,transparent)]"
      aria-hidden
    />

    <Container className="relative py-10 sm:py-14 md:py-20 lg:min-h-[calc(100vh-4rem)] lg:py-24">
      <section
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
        aria-labelledby="hero-title"
      >
        <p className="mb-5 inline-flex w-max max-w-full items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary sm:px-4 sm:text-xs sm:tracking-widest">
          <span className="relative flex h-2 w-2 shrink-0 motion-reduce:hidden" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Gestão de competições CrossFit
        </p>

        <h1
          id="hero-title"
          className="mb-5 text-[1.75rem] font-bold leading-[1.12] text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Inscrições, placar e cronograma
          <br />
          <span className="text-primary">em uma única plataforma</span>
        </h1>

        <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:mb-10 sm:text-lg md:text-xl">
          A Wodful integra a operação do dia do evento: vagas e categorias
          online, leaderboard ao vivo e ajuste de baterias em tempo real — com
          visibilidade para equipe, atletas e público.
        </p>

        <div
          className="mb-6 flex w-full max-w-sm flex-col items-stretch gap-4 sm:max-w-md"
          role="group"
          aria-label="Chamadas para ação"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-md no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Button
              variant="whatsapp"
              className="w-full min-h-[48px] gap-2 px-5 py-3.5 text-base shadow-glow sm:gap-3 sm:px-8 sm:py-4 sm:text-lg"
            >
              <img src={Whatsapp} className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" alt="" aria-hidden />
              <span className="text-center leading-tight">
                <span className="sm:hidden">Falar no WhatsApp</span>
                <span className="hidden sm:inline">Agendar conversa no WhatsApp</span>
              </span>
            </Button>
          </a>
          <Link
            to="#features"
            className="flex min-h-[44px] items-center justify-center text-sm font-medium text-gray-300 no-underline transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Conhecer a plataforma →
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          Para organizadores de boxes, festivais e campeonatos
        </p>
      </section>

      <section
        className="mt-10 sm:mt-12"
        aria-labelledby="hero-highlights-heading"
      >
        <h2 id="hero-highlights-heading" className="sr-only">
          Principais recursos da plataforma
        </h2>
        <ul className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {highlights.map((item) => (
            <li key={item.label} className="min-w-0 list-none">
              <Link
                to={item.href}
                className="group relative flex h-full min-h-[11rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-5 text-left no-underline transition-all duration-300 hover:border-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:p-6"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
                <div className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/25 sm:mb-4 sm:h-11 sm:w-11">
                  <img src={item.icon} alt="" className="h-5 w-5" aria-hidden />
                </div>
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-[11px]">
                  {item.label}
                </span>
                <h3 className="mb-2 block text-base font-bold leading-snug text-white sm:text-lg">
                  {item.headline}
                </h3>
                <span className="mt-auto block text-sm leading-relaxed text-gray-400">
                  {item.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 flex justify-center pb-2 sm:mt-12">
        <Link
          to="#features"
          className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1 rounded-md px-4 text-xs text-gray-400 no-underline transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:hidden"
        >
          <span>Explorar</span>
          <svg
            className="h-5 w-5 motion-safe:animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </Container>
  </main>
);
