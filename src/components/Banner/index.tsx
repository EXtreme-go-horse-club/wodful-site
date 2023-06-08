import * as React from "react";
import BannerDesk from "../../images/banner-desk.svg";
import BannerMobile from "../../images/mobile-banner.svg";
import * as styles from "./styles.module.css";

export const Banner = () => (
  <section className={styles.container}>
    <h3 className={styles.h3}>
      O sucesso do seu evento de Crossfit está nas suas mãos!
    </h3>
    <img
      src={BannerDesk}
      className={styles.banner_desk}
      alt="Banner de motivação"
    />
    <img
      src={BannerMobile}
      className={styles.banner_mobile}
      alt="Banner de motivação"
    />
  </section>
);
