import { Link } from "gatsby";
import * as React from "react";
import Sistem from "../../images/sistem.svg";
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

      <main>
        <section className={styles.section}>
          <article className={styles.container}>
            <h1 className={styles.title}>Gerencie seu evento de Crossfit</h1>
            <p className={styles.text}>
              Eleve o nível do seu evento de CrossFit com o
              <strong> Sistema de Scoreboard </strong>
              inovador da Wodful e acompanhe o andamento da sua competição de
              qualquer lugar em tempo real
            </p>
            <Link to="#contact">
              <button className={styles.button_cta} type="button">
                Entrar em contato
              </button>
            </Link>
          </article>

          <img src={Sistem} className={styles.capa} alt="Capa do sistema" />
        </section>
      </main>
    </section>
  );
};
