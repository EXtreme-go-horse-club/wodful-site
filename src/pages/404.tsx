import { HeadFC, navigate, PageProps } from "gatsby";
import * as React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LottiePlayer } from "../components/LottiePlayer";
import { Seo } from "../components/SEO";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

const LOTTIE_404 =
  "https://lottie.host/5b8bebb0-b23f-4bf1-ad27-bb98ffe85923/G2P5SOhuTB.json";

const NotFoundPage: React.FC<PageProps> = () => (
  <div className="flex min-h-screen flex-col bg-slate-50 text-gray-900">
    <Header isSimple />

    <main className="flex flex-1 flex-col">
      <Container className="flex flex-1 flex-col items-center justify-center py-10 sm:py-16">
        <div className="w-full max-w-md rounded-2xl border border-gray-200/80 bg-white p-6 text-center shadow-lg shadow-gray-900/5 sm:p-8">
          <LottiePlayer
            loop
            src={LOTTIE_404}
            style={{ height: "200px", width: "200px" }}
          />

          <span className="mt-2 inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600 ring-1 ring-gray-200/80">
            Erro 404
          </span>

          <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-[26px]">
            Página não encontrada
          </h1>

          <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
            Oops! Parece que a página que você está procurando desapareceu. Mas
            não se preocupe, você pode voltar para a nossa página inicial.
          </p>

          <Button
            type="button"
            onClick={() => navigate("/")}
            className="mt-8 !w-full"
          >
            Página inicial
          </Button>
        </div>
      </Container>
    </main>

    <Footer isSimple />
  </div>
);

export default NotFoundPage;

export const Head: HeadFC = () => (
  <Seo
    title="Página não encontrada"
    description="A página que você procura não existe ou foi movida."
    pathname="/404"
    noindex
    jsonLd={undefined}
  />
);
