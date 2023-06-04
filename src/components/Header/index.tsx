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

export const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);

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

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <section className={styles.container_size}>
      <header className={styles.header}>
        <img src={HeaderLogo} alt="Wodful logo" />

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
          <Link to="/">Acesse</Link>
          <button className={styles.button_header} type="button">
            Entrar em contato
          </button>
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
          <Link to="/">Acesse</Link>
        </nav>

        <button className={styles.button_header} type="button">
          Entrar em contato
        </button>
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
            <button className={styles.button_cta} type="button">
              Entrar em contato
            </button>
          </article>

          <div className={styles.image_fake}></div>
        </section>
      </main>
    </section>
  );
};
