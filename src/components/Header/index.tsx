import { Link } from "gatsby";
import * as React from "react";
import HeaderLogo from "../../images/wodful-logo.svg";
import Hamburger from "../Hamburger";
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

const isBrowser = typeof window !== "undefined";

export const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);

  if (isBrowser) {
    const [windowSize, setWindowSize] = React.useState([
      window.innerWidth,
      window.innerHeight,
    ]);

    React.useEffect(() => {
      const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
      };

      window.addEventListener("resize", handleWindowResize);

      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);

    React.useEffect(() => {
      if (windowSize[0] > 767) setHamburgerOpen(false);
    }, [windowSize[0]]);
  }

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <section className={styles.container_size}>
      <header className={styles.header}>
        <Link to="#">
          <img src={HeaderLogo} alt="Wodful logo" />
        </Link>

        <article>
          <nav className={styles.space}>
            {navLinks.map((link) => (
              <Link key={link.description} to={link.to}>
                {link.description}
              </Link>
            ))}
          </nav>
        </article>

        <article className={styles.space}>
          {/* <Link target="_blank" to="https://app.wodful.com/login">
            Acesse
          </Link> */}
          <Link to="#contact">
            <button className={styles.button_header} type="button">
              Entrar em contato
            </button>
          </Link>
        </article>
        <div onClick={toggleHamburger} className={styles.hamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </header>

      <section className={hamburgerOpen ? styles.hamburger_menu : styles.none}>
        <nav className={styles.hamburger_nav}>
          {navLinks.map((link) => (
            <Link key={link.description} to={link.to}>
              {link.description}
            </Link>
          ))}
          {/* <Link to="/">Acesse</Link> */}
        </nav>

        <Link to="#contact">
          <button className={styles.button_header} type="button">
            Entrar em contato
          </button>
        </Link>
      </section>
    </section>
  );
};
