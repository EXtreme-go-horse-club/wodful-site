import * as React from "react";
import * as styles from "./styles.module.css";

type HamburgerProps = {
  isOpen: boolean;
};

export default function Hamburger({ isOpen = false }: HamburgerProps) {
  return (
    <>
      <div className={styles.hamburger}>
        <div
          className={`${styles.burger} ${
            isOpen ? styles.burger1_open : styles.burger1_close
          }`}
        />
        <div
          className={`${styles.burger} ${
            isOpen ? styles.burger2_open : styles.burger2_close
          }`}
        />
        <div
          className={`${styles.burger} ${
            isOpen ? styles.burger3_open : styles.burger3_close
          }`}
        />
      </div>
    </>
  );
}
