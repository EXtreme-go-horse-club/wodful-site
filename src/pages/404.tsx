import { HeadFC, Link, PageProps } from "gatsby";
import * as React from "react";
import { LottiePlayer } from "../components/LottiePlayer";

const headingStyles = {
  marginTop: 0,
  marginBottom: 36,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 36,
};

const NotFoundPage: React.FC<PageProps> = () => (
  <main
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      width: "100%",
      flexDirection: "column",
      textAlign: "center",
      padding: "2rem",
    }}
  >
    <LottiePlayer
      loop
      src="https://lottie.host/5b8bebb0-b23f-4bf1-ad27-bb98ffe85923/G2P5SOhuTB.json"
      style={{ height: "360px", width: "360px" }}
    />
    <h1 style={headingStyles}>Página não encontrada</h1>
    <p style={paragraphStyles}>
      Oops! Parece que a página que você está procurando desapareceu. Mas não se
      preocupe, você pode voltar para a nossa página inicial.
    </p>
    <Link to="/">
      <button
        style={{
          padding: "16px 24px",
        }}
        type="button"
      >
        Página inicial
      </button>
    </Link>
  </main>
);

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
