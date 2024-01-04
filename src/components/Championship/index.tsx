import * as React from "react";
import * as styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { ChampionshipResponse } from "../../models/ChampionshipResponse";
import { ChampionshipService } from "../../services/championships";
import BannerImg from "../../images/teste.jpg";
import MapPin from "../../images/map-pin.svg";
import { navigate } from "gatsby";

export const ChampionshipData = () => {
  const [championships, setChampionships] = useState<ChampionshipResponse[]>();

  const getChampionship = React.useCallback(async () => {
    await new ChampionshipService()
      .getChampionship()
      .then((response: ChampionshipResponse[]) => {
        setChampionships(response);
      });
  }, []);

  useEffect(() => {
    getChampionship();
  }, [getChampionship]);

  return (
    <section id="benefits" className={styles.container}>
      <h1>Inscrições abertas</h1>
      <section className={styles.section}>
        {championships?.map((champ) => (
          <div
            className={styles.championship}
            key={champ.accessCode}
            onClick={() => navigate(`/event/${champ.accessCode}/`)}
          >
            <div>
              <img
                src={`${process.env.GATSBY_BASE_SERVER_URL}/banner/${champ.banner}`}
                alt=""
              />
              <span
                className={
                  champ.isFinished ? styles.notAvailable : styles.available
                }
              >
                {champ.isFinished ? "Encerrado" : "Inscrever-se"}
              </span>
            </div>
            <div className={styles.info}>
              <h3>{champ.name}</h3>
              <span>
                {champ.startDate} até {champ.endDate}
              </span>
              <div className={styles.address}>
                <img src={MapPin} alt="" />
                <p>{champ.address}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};
