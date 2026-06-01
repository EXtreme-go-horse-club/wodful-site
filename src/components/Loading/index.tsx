import * as React from "react";
import { LottiePlayer } from "../LottiePlayer";
import * as styles from "./styles.module.css";

export const Loading = () => (
  <section className={styles.container}>
    <div className={styles.content}>
      <LottiePlayer
        loop
        src="https://lottie.host/d1d42989-a9f9-48e2-8092-ac1aaa95f974/m71O3jVHL2.json"
        style={{ height: "360px", width: "360px" }}
      />
    </div>
  </section>
);
