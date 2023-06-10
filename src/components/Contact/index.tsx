import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CrossColab from "../../images/cross-colab.svg";
import CheckLine from "./../../images/check-line.svg";
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
  const { register, handleSubmit, reset } = useForm<ContactForm>();

  const [alreadyContact, setAlreadyContact] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    setAlreadyContact(true);
    localStorage.setItem("@wodful:contact_ok", JSON.stringify(true));
    reset();
    console.log(data);
  };

  React.useEffect(() => {
    const contact_value = JSON.parse(
      localStorage.getItem("@wodful:contact_ok") as string
    );
    if (contact_value) return setAlreadyContact(contact_value);
  }, []);

  return (
    <section id="contact" className={styles.container}>
      {alreadyContact ? (
        <Thanks />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.section_input}
        >
          <h1 className={styles.h1}>Contato</h1>
          <p className={styles.text}>
            Entre em contato com a nossa equipe para agendar uma demonstração do
            sistema.
          </p>

          <article className={styles.form_input}>
            <input
              required
              defaultValue={DEFAULT_VALUES.firstName}
              className={styles.input}
              type="text"
              placeholder="Nome"
              {...register("firstName", { required: true })}
            />
            <input
              required
              defaultValue={DEFAULT_VALUES.lastName}
              className={styles.input}
              type="text"
              placeholder="Sobrenome"
              {...register("lastName", { required: true })}
            />
          </article>
          <input
            required
            type="tel"
            defaultValue={DEFAULT_VALUES.tel}
            className={styles.input}
            {...register("tel", { required: true })}
            placeholder="Telefone"
          />
          <input
            required
            {...register("email", { required: true })}
            type="email"
            defaultValue={DEFAULT_VALUES.email}
            className={styles.input}
            placeholder="E-mail"
          />
          <textarea
            {...register("message", { required: false })}
            placeholder="Mensagem (Opcional)"
            defaultValue={DEFAULT_VALUES.message}
          />

          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </form>
      )}

      <section className={styles.section_img}>
        <img src={CrossColab} className={styles.img} alt="Banner da Wodful" />
      </section>
    </section>
  );
};

const Thanks = () => (
  <section className={styles.thanks}>
    <h1>Obrigado!</h1>

    <img
      src={CheckLine}
      className={styles.contact_image}
      alt="Confirmação de contato"
    />
    <strong>Recebemos sua solicitação!</strong>
    <p>
      Nossa equipe está trabalhando para respondê-la o mais rápido possível e em
      breve estaremos em contato!
    </p>
  </section>
);
