import * as React from "react";
import CrossColab from "../../images/cross-colab.svg";
import Whatsapp from "../../images/whatsapp2.svg";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export const Contact = () => {
  const message = "Olá, gostaria de saber mais sobre a WODFUL!";
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const onSubmit = () => {
    const link = `https://wa.me/554598070615?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank");
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 5000);
  };

  return (
    <section id="contact" className="bg-white text-gray-900">
      <Container className="flex flex-col items-center gap-12 py-16 md:flex-row md:items-start md:justify-between md:py-24 lg:gap-20">
        <article className="max-w-md">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Contato
          </h2>
          <p className="mb-8 text-gray-600">
            Estamos aqui para transformar a maneira como você gerencia e organiza
            sua competição. Clique no botão abaixo e saiba como a{" "}
            <strong className="font-semibold text-gray-900">WODFUL</strong> pode
            fazer a diferença no seu evento.
          </p>
          <Button
            variant="whatsapp"
            disabled={isDisabled}
            onClick={onSubmit}
            className="h-14 w-full gap-4 px-8 sm:w-auto"
          >
            <img src={Whatsapp} className="h-8 w-8" alt="" aria-hidden />
            <span>Entrar em contato</span>
          </Button>
        </article>

        <div className="hidden w-full max-w-lg md:block lg:max-w-xl">
          <img
            src={CrossColab}
            className="w-full rounded-lg object-cover"
            alt="Atletas em competição de CrossFit"
          />
        </div>
      </Container>
    </section>
  );
};
