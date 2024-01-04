import { navigate } from "gatsby";
import * as React from "react";
import { useEffect, useState } from "react";
import Calendar from "../../images/calendar-black.svg";
import MapPin from "../../images/map-pin.svg";
import { EventResponse } from "../../models/EventResponse";
import { EventService } from "../../services/events";
import { SubscriptionChoice } from "./SubscriptionChoice";
import * as styles from "./styles.module.css";

interface IEventData {
  accessCode: string;
}

export const EventData = ({ accessCode }: IEventData) => {
  const [event, setEvent] = useState<EventResponse>();

  const getEvent = React.useCallback(async (access: string) => {
    await new EventService()
      .getEvent(access)
      .then((eventResponse: EventResponse) => {
        setEvent(eventResponse);
      })
      .catch(() => navigate("/404"));
  }, []);

  useEffect(() => {
    getEvent(accessCode);
  }, [getEvent]);

  return (
    <div className={styles.container}>
      <div className={styles.banner} />
      {event?.banner && (
        <img
          src={`http://localhost:3333/banner/${event.banner}`}
          className={styles.background}
        />
      )}

      <main className={styles.main}>
        <section className={styles.event_data}>
          <h2>{event?.name.toLocaleUpperCase()}</h2>
          <div className={styles.event_info}>
            <img
              src={Calendar}
              alt="ícone de calendário, mostrando a data do evento"
              height={16}
              width={16}
            />
            <p className={styles.paragraph}>
              {event?.startDate} até {event?.endDate}
            </p>
          </div>
          <div className={styles.event_info}>
            <img
              src={MapPin}
              alt="ícone de localização do evento"
              height={16}
              width={16}
            />
            <p className={styles.paragraph}>{event?.address}</p>
          </div>
        </section>
        <section className={styles.left}>
          {event?.description ? (
            <article>
              <h3>Descrição</h3>
              <p className={styles.paragraph}>{event?.description}</p>
            </article>
          ) : (
            <article className={styles.blank}></article>
          )}
        </section>
        <SubscriptionChoice
          tickets={event?.tickets}
          accessCode={accessCode}
          isFinished={event?.isFinished}
        ></SubscriptionChoice>
      </main>
    </div>
  );
};
