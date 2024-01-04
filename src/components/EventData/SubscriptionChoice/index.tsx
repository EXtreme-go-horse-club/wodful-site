import { navigate } from "gatsby";
import * as React from "react";
import ArrowRight from "../../../images/arrow-right.svg";
import CrossxRed from "../../../images/crossx-red.svg";

import { Ticket } from "../../../models/EventResponse";
import * as styles from "./styles.module.css";

interface ISubscriptionData {
  tickets?: Ticket[];
  accessCode: string;
  isFinished?: boolean;
}

export const SubscriptionChoice = ({
  tickets,
  accessCode,
  isFinished,
}: ISubscriptionData) => {
  const handleNavigate = (selectedToGo: Ticket) => {
    localStorage.setItem("@Wodful:ticket", JSON.stringify(selectedToGo.id));
    navigate(`/subscription/${accessCode}/`);
  };
  return (
    <section className={styles.right}>
      <div className={styles.title}>Inscrições</div>
      <section>
        {isFinished && (
          <article className={styles.tickets} style={{ cursor: "auto" }}>
            <div>
              <p>
                <b>Encerradas</b>
              </p>
              <p>As inscrições para este evento estão encerradas</p>
            </div>
            <div className={styles.icon}>
              <img src={CrossxRed} alt="Ícone de X - inscrições encerradas" />
            </div>
          </article>
        )}

        {tickets &&
          (tickets.length > 0 ? (
            tickets.map((ticket) => (
              <article
                className={styles.tickets}
                key={ticket.id}
                onClick={() => handleNavigate(ticket)}
              >
                <div>
                  <p>
                    <b>{ticket.name}</b>
                  </p>
                  <p>{ticket.description}</p>
                </div>
                <div className={styles.icon}>
                  <b style={{ width: "max-content" }}>R$ {ticket.price}</b>
                  <img src={ArrowRight} alt="Seguir para inscrição" />
                </div>
              </article>
            ))
          ) : (
            <article className={styles.tickets} style={{ cursor: "auto" }}>
              <div>
                <p>
                  <b>Sem ingressos</b>
                </p>
                <p>Ainda não há ingressos disponíveis para este evento</p>
              </div>
              <div className={styles.icon}>
                <img
                  src={CrossxRed}
                  alt="Ícone de X - Sem tickets cadastrados pelo organizador"
                />
              </div>
            </article>
          ))}
      </section>
    </section>
  );
};
