import * as React from "react";
import CrossColab from "../../images/cross-colab.svg";
import * as styles from "./styles.module.css";

type ContactForm = {
  firstName: string;
  lastName: string;
  tel: string;
  email: string;
  message?: string;
};

const DEFAULT_VALUES = {
  firstName: "",
  lastName: "",
  tel: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [form, setForm] = React.useState<ContactForm>(DEFAULT_VALUES);

  const handleForm = () => {
    console.log(form);
    setForm(DEFAULT_VALUES);
  };

  return (
    <section id="contact" className={styles.container}>
      <form onSubmit={handleForm} className={styles.section_input}>
        <h1 className={styles.h1}>Contato</h1>
        <p className={styles.text}>
          Entre em contato com a nossa equipe para agendar uma demonstração do
          sistema.
        </p>

        <article className={styles.form_input}>
          <input
            required
            value={DEFAULT_VALUES.firstName}
            className={styles.input}
            type="text"
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            placeholder="Nome"
          />
          <input
            required
            value={DEFAULT_VALUES.lastName}
            className={styles.input}
            type="text"
            placeholder="Sobrenome"
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
        </article>
        <input
          required
          type="tel"
          value={DEFAULT_VALUES.tel}
          className={styles.input}
          onChange={(e) => setForm({ ...form, tel: e.target.value })}
          placeholder="Telefone"
        />
        <input
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          type="email"
          value={DEFAULT_VALUES.email}
          className={styles.input}
          placeholder="E-mail"
        />
        <textarea
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Mensagem (Opcional)"
          value={DEFAULT_VALUES.message}
        />

        <button className={styles.button}> Enviar </button>
      </form>
      <section className={styles.section_img}>
        <img src={CrossColab} className={styles.img} alt="Banner da Wodful" />
      </section>
    </section>
  );
};
