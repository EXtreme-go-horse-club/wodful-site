import * as React from "react";
import * as styles from "./styles.module.css";
import ArrowRight from "../../../images/arrow-right.svg";
import { Ticket } from "../../../models/EventResponse";

interface ISubscriptionData {
  tickets: Ticket[];
}

export const SubscriptionChoice = ({ tickets }: ISubscriptionData) => (
  <section className={styles.right}>
    <div className={styles.title}>Inscrições</div>
    <section>
      {tickets.length > 0 &&
        tickets.map((ticket) => (
          <article className={styles.tickets}>
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

      {/* <article className={styles.tickets}>
        <div>
          <p>
            <b>Tipo de inscricao</b>
          </p>
          <p>Mais info</p>
        </div>
        <div className={styles.icon}>
          <span>{">"}</span>
        </div>
      </article>
      <article className={styles.tickets}>
        <div>
          <p>
            <b>Tipo de inscricao</b>
          </p>
          <p>Mais info</p>
        </div>
        <div className={styles.icon}>
          <span>{">"}</span>
        </div>
      </article> */}
    </section>
  </section>
);
