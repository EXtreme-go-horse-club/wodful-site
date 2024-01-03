import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { db } from "../../config/Firebase/firebase";
import CrossColab from "../../images/cross-colab.svg";
import CheckLine from "./../../images/check-line.svg";
import * as styles from "./styles.module.css";

import ReCAPTCHA from "react-google-recaptcha";

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

const isBrowser = typeof window !== "undefined";

export const Contact = () => {
  const { register, handleSubmit, reset } = useForm<ContactForm>();
  const [alreadyContact, setAlreadyContact] = React.useState<boolean>(false);

  const [recaptcha, setRecaptcha] = React.useState("");
  const [isVerified, setIsVerified] = React.useState<boolean>(false);

  const [fake_field, setFakeField] = React.useState("");

  const onChange = (token: string) => {
    setRecaptcha(token);
    if (token) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  const canSubmit = React.useMemo(
    () => isVerified && !!recaptcha,
    [recaptcha, isVerified]
  );

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    if (fake_field !== "") {
      console.error("it's a bot!");
      window.gtag("event", "click", {
        event_label: "bot_detected",
        content_type: "bot_detected_on_contact",
        value: `bot_detected_on_contact`,
        description: `bot_detected_on_contact`,
      });
      return;
    }

    if (canSubmit) {
      setAlreadyContact(true);
      reset();
      localStorage.setItem("@wodful:contact_ok", JSON.stringify(true));

      if (isBrowser) {
        typeof window !== "undefined" &&
          window.gtag("event", "click", {
            event_label: "contact_send",
            content_type: "first_contact",
            value: `${data.firstName} ${data.lastName} - ${data.email} - ${data.tel}`,
            description: `${data.message}`,
          });
      }

      await addDoc(collection(db, "contacts"), {
        firstName: data.firstName,
        lastName: data.lastName,
        tel: data.tel,
        email: data.email,
        message: data.message,
        timestamp: serverTimestamp(),
      });
    }
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

          <input
            type="hidden"
            name="fake_field"
            value={fake_field}
            onChange={(e) => setFakeField(e.target.value)}
          />

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

          <ReCAPTCHA
            sitekey={`${process.env.GATSBY_SIE_KEY}`}
            onChange={(token) => onChange(token!)}
          />
          <button disabled={!canSubmit} type="submit" className={styles.button}>
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
