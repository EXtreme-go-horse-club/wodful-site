import { Link } from "gatsby";
import * as React from "react";
import HeaderLogo from "../../images/wodful-logo.svg";
import * as styles from "./styles.module.css";

type NavLinks = {
  to: string;
  description: string;
};

const navLinks: NavLinks[] = [
  {
    to: "#features",
    description: "Funcionalidades",
  },
  {
    to: "#benefits",
    description: "Benefícios",
  },
];

export const Footer = () => {
  return (
    <footer className={styles.container_footer}>
      <Link to="#">
        <img src={HeaderLogo} alt="Wodful logo" />
      </Link>
      <nav className={styles.space}>
        {navLinks.map((link) => (
          <Link key={link.description} to={link.to}>
            {link.description}
          </Link>
        ))}
      </nav>
      <article>
        <span>© Copyright 2021 Wodful</span>
      </article>
    </footer>
  );
};
