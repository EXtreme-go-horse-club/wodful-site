import * as React from "react";
import * as styles from "./styles.module.css";
import BannerImg from "../../images/teste.jpg";
import { SubscriptionChoice } from "./SubscriptionChoice";
import { useEffect, useState } from "react";
import { EventService } from "../../services/events";
import { EventResponse } from "../../models/EventResponse";
import MapPin from "../../images/map-pin.svg";
import Calendar from "../../images/calendar-black.svg";

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
              <img src={Calendar} alt="Data" />
              <p>
                {event?.startDate} até {event?.endDate}
              </p>
            </div>
            <div className={styles.event_info}>
              <img src={MapPin} alt="Localização" />
              <p>{event?.address}</p>
            </div>
          </article>
          {event?.description ? (
            <article>
              <h3>Descrição</h3>
              <p>{event?.description}</p>
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
