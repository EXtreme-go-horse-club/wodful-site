import { Link } from "gatsby";
import * as React from "react";
import HeaderLogo from "../../images/wodful-logo.svg";
import * as styles from "./styles.module.css";

interface IFooterProps {
  isSimple?: boolean;
}

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

export const Footer = ({ isSimple = false }: IFooterProps) => {
  return (
    <footer
      className={`${isSimple ? styles.simple_footer : styles.container_footer}`}
    >
      {!isSimple && (
        <a href="https://wodful.com">
          <img src={HeaderLogo} alt="Wodful logo" />
        </a>
      )}

      {!isSimple && (
        <Link to="#">
          <img src={HeaderLogo} alt="Wodful logo" />
        </Link>
      )}

      {!isSimple && (
        <nav className={styles.space}>
          {navLinks.map((link) => (
            <Link key={link.description} to={link.to}>
              {link.description}
            </Link>
          ))}
        </nav>
      )}

      <article>
        <span>© Copyright 2021 Wodful</span>
      </article>
    </footer>
  );
};
