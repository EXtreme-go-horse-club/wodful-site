import * as React from "react";
import * as styles from "./styles.module.css";
import BannerImg from "../../images/teste.jpg";
import { SubscriptionChoice } from "./Subscription";
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
  const [dates, setDates] = useState<String>("");

  const getEvent = React.useCallback(async (access: string) => {
    await new EventService()
      .getEvent(access)
      .then((eventResponse: EventResponse) => {
        getStartEndDate(eventResponse.startDate, eventResponse.endDate);
        setEvent(eventResponse);
        console.log(eventResponse);
      });
  }, []);

  const getStartEndDate = (startDate: Date, endDate: Date) => {
    console.log(startDate);
    if (startDate && endDate) {
      startDate = new Date(startDate);
      endDate = new Date(endDate);

      let startDateMDY = `${startDate.getDate()}/${
        startDate.getMonth() + 1
      }/${startDate.getFullYear()}`;
      let endDateMDY = `${endDate.getDate()}/${
        endDate.getMonth() + 1
      }/${endDate.getFullYear()}`;
      setDates(startDateMDY + " até " + endDateMDY);
    }
  };

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
              <p>{dates}</p>
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
          <SubscriptionChoice tickets={event!.tickets}></SubscriptionChoice>
        )}
      </main>
    </div>
  );
};
