import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
  const { register, handleSubmit, reset } = useForm<ContactForm>();

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    console.log(data);
    alert("Solicitação de contato enviada com sucesso! Obrigado!");
    reset();
  };

  return (
    <section id="contact" className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.section_input}>
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
      <section className={styles.section_img}>
        <img src={CrossColab} className={styles.img} alt="Banner da Wodful" />
      </section>
    </section>
  );
};
