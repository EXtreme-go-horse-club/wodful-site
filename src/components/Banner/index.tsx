import * as React from "react";
import BannerDesk from "../../images/banner-desk.svg";
import BannerMobile from "../../images/mobile-banner.svg";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

export const Banner = () => (
  <Section className="!py-8 md:!py-12" aria-labelledby="banner-heading">
    <Container>
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
        <img
          src={BannerDesk}
          className="hidden w-full md:block"
          alt="Atleta de CrossFit em competição"
        />
        <img
          src={BannerMobile}
          className="block w-full md:hidden"
          alt="Atleta de CrossFit em competição"
        />
        <div
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-blue-dark/90 via-blue-dark/45 to-transparent md:block"
          aria-hidden
        />
        <div className="relative bg-blue-dark px-5 py-8 sm:px-8 md:absolute md:inset-0 md:flex md:items-center md:bg-transparent md:px-10 lg:px-16">
          <div className="max-w-lg lg:max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:tracking-[0.2em]">
              Competição é show
            </p>
            <h2
              id="banner-heading"
              className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Seu evento merece a mesma energia do piso
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
              A Wodful coloca organização e emoção na mesma tela — para você
              brilhar como produção, não só como nome no cartaz.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);
