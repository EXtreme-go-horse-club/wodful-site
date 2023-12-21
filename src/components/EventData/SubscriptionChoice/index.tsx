import * as React from "react";
import * as styles from "./styles.module.css";
import ArrowRight from "../../../images/arrow-right.svg";
import { Ticket } from "../../../models/EventResponse";
import { navigate } from "gatsby";

interface ISubscriptionData {
  tickets: Ticket[];
  accessCode: string;
}

export const SubscriptionChoice = ({
  tickets,
  accessCode,
}: ISubscriptionData) => {
  const handleNavigate = (selectedToGo: Ticket) => {
    localStorage.setItem("@Wodful:ticket", JSON.stringify(selectedToGo.id));
    navigate(`/subscription/${accessCode}/`);
  };

  return (
    <section className={styles.right}>
      <div className={styles.title}>Inscrições</div>
      <section>
        {tickets.length > 0 &&
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
                <img src={ArrowRight} alt="Seguir para inscrição" />
              </div>
            </article>
          ))}
      </section>
    </section>
  );
};
