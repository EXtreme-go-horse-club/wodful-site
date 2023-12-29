import * as React from "react";
import { useEffect, useState } from "react";
import Calendar from "../../images/calendar-black.svg";
import MapPin from "../../images/map-pin.svg";
import BannerImg from "../../images/teste.jpg";
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
        console.log(eventResponse);
      });
  }, []);

  useEffect(() => {
    getEvent(accessCode);
  }, [getEvent]);

  return (
    <div className={styles.container}>
      <img src={BannerImg} className={styles.background}></img>
      <div className={styles.banner}>
        <img src={BannerImg} alt="banner" />
      </div>
      <main className={styles.main}>
        <section className={styles.left}>
          <article className={styles.event_data}>
            <h2>{event?.name}</h2>
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
          </article>
          {event?.description ? (
            <article>
              <h3>Descrição</h3>
              <p className={styles.paragraph}>{event?.description}</p>
            </article>
          ) : (
            <article className={styles.blank}></article>
          )}
        </section>
        {event?.tickets && (
          <SubscriptionChoice
            tickets={event!.tickets}
            accessCode={accessCode}
          ></SubscriptionChoice>
        )}
      </main>
    </div>
  );
};
