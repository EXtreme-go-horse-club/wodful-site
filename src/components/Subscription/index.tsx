import { navigate } from "gatsby";
import * as React from "react";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import Calendar from "../../images/calendar-black.svg";
import MapPin from "../../images/map-pin.svg";
import { EventResponse, Ticket } from "../../models/EventResponse";
import { IParticipantForm } from "../../models/ParticipantDTO";
import { EventService } from "../../services/events";
import { SubscriptionService } from "../../services/subscription";
import { isValidDocument, regexOnlyNumber } from "../../utils";
import * as styles from "./styles.module.css";

import Modal from "react-modal";

import ArrowRight from "../../images/arrow-right.svg";
import { ParticipantsService } from "../../services/participants";
import { Feedback } from "../Feedback";
import { Loading } from "../Loading";
type ISubscriptionData = {
  accessCode: string;
};

type IGetParticipantsRequest = {
  type: "nickname" | "code";
  search: string;
  index?: number;
} & ISubscriptionData;

interface ModalType {
  isOpen: boolean;
  type?: "success" | "error";
  message?: string;
}

const Validation = {
  invalidEmpty: "Campo obrigatório",
  invalid: "Valor inválido",
  invalidSM: "Mínimo 1 caracteres",
  invalidLG: "Máximo 50 caracteres",
};

export const SubscriptionData = ({ accessCode }: ISubscriptionData) => {
  const recaptchaCodeRef = React.useRef<ReCAPTCHA>(null);
  const [event, setEvent] = useState<EventResponse>();
  const [ticket, setTicket] = useState<Ticket>();
  const [indexes, setIndexes] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [participantsDocs, setParticipantsDocs] = useState({});
  const [isDuplicateDoc, setIsDuplicateDoc] = useState(false);

  const updateDoc = (index: number, value: string) => {
    setParticipantsDocs({ ...participantsDocs, [index]: value });
  };

  const checkDuplicateDocs = () => {
    const values = Object.values(participantsDocs);
    const hasDuplicates = new Set(values).size !== values.length;
    setIsDuplicateDoc(hasDuplicates);
  };

  useEffect(() => {
    checkDuplicateDocs();
  }, [participantsDocs]);

  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IParticipantForm>({
    mode: "all",
  });

  const [recaptcha, setRecaptcha] = React.useState("");
  const [isVerified, setIsVerified] = React.useState<boolean>(false);
  const [fake_field, setFakeField] = React.useState("");

  const [modalState, setModalState] = React.useState<ModalType>({
    isOpen: false,
    type: "success",
  } as ModalType);

  const onChange = (token: string) => {
    setRecaptcha(token);
    if (token) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  const canSubmit = React.useMemo(
    () =>
      isVerified &&
      !!recaptcha &&
      !fake_field &&
      (!errors.nickname ||
        !errors.responsibleName ||
        !errors.responsibleEmail ||
        !errors.responsiblePhone),
    [recaptcha, isVerified, recaptchaCodeRef]
  );

  const getEvent = React.useCallback(
    async (access: string, ticketId: string) => {
      setIsLoading(true);
      await new EventService()
        .getEvent(access)
        .then((eventResponse: EventResponse) => {
          if (eventResponse.isFinished) {
            navigate(`/event/${eventResponse.accessCode}`);
            return;
          }
          setIndexes([]);
          let singleTicket = eventResponse.tickets.find(
            (ticket: Ticket) => ticket.id === ticketId
          );
          setEvent(eventResponse);
          setTicket(singleTicket);
          for (let index = 0; index < singleTicket!.category.members; index++) {
            setIndexes((indexes) => [...indexes, index]);
          }
        })
        .catch(() => navigate("/404"))
        .finally(() => setIsLoading(false));
    },
    []
  );

  const getParticipant = React.useCallback(
    async ({ accessCode, search, type, index }: IGetParticipantsRequest) => {
      if (search && type === "code") {
        await new ParticipantsService()
          .getParticipantByCode({ accessCode, search })
          .catch(() =>
            setError(`participants.${index!}.identificationCode`, {
              message: "Documento já cadastrado",
            })
          );
      }

      if (search && type === "nickname") {
        await new ParticipantsService()
          .getParticipantByNickname({ accessCode, search, ticket: ticket?.id })
          .catch(() =>
            setError("nickname", { message: "Nome ou apelido já cadastrado" })
          );
      }
    },
    [ticket]
  );

  const PostSubscription = React.useCallback(
    async (subscription: IParticipantForm) => {
      await new SubscriptionService()
        .postSubscription(subscription)
        .then(() => setModalState({ isOpen: true, type: "success" }))
        .catch(() => {
          setModalState({ isOpen: true, type: "error" });
        });
    },
    []
  );

  const onSubmit = (subscription: IParticipantForm) => {
    if (fake_field !== "") {
      console.error("it's a bot!");
      window.gtag("event", "click", {
        event_label: "bot_detected",
        content_type: "bot_detected_on_subscription",
        value: `bot_detected_on_subscription`,
        description: `bot_detected_on_subscription`,
      });
      return;
    }

    const subs = {
      ...subscription,
      participants: subscription.participants.map((participant) => ({
        ...participant,
        identificationCode: regexOnlyNumber(participant.identificationCode),
      })),
    };

    subs.ticketId = ticket!.id;
    PostSubscription(subs);
  };

  const formatPhone = (phoneNumber: string) => {
    phoneNumber = regexOnlyNumber(phoneNumber);
    setValue("responsiblePhone", phoneNumber);
  };

  const formatDocument = (document: string, index: number) => {
    document = regexOnlyNumber(document);
    setValue(`participants.${index}.identificationCode`, document);
  };

  useEffect(() => {
    const ticketStorage = localStorage.getItem("@Wodful:ticket");
    if (!ticketStorage) navigate(`/event/${accessCode}/`);
    getEvent(accessCode, ticketStorage!.replaceAll('"', ""));
  }, [getEvent]);

  return (
    <>
      {!isLoading ? (
        <div className={styles.container}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="hidden"
              name="fake_field"
              value={fake_field}
              onChange={(e) => setFakeField(e.target.value)}
            />
            <main className={styles.main}>
              <div className={styles.heading}>
                <section className={styles.title}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "16px",
                    }}
                  >
                    <img
                      src={ArrowRight}
                      style={{
                        width: "32px",
                        transform: "rotate(180deg)",
                        cursor: "pointer",
                      }}
                      alt="Seguir para inscrição"
                      role="button"
                      onClick={() => navigate(`/event/${accessCode}/`)}
                    />
                    <p className={styles.paragraph}>Voltar</p>
                  </div>
                  <article className={styles.event_data}>
                    <h2>{event?.name}</h2>
                    <div className={styles.event_info}>
                      <img
                        src={Calendar}
                        alt="ícone de calendário, mostrando a data do evento"
                      />
                      <p className={styles.paragraph}>
                        {event?.startDate} até {event?.endDate}
                      </p>
                    </div>
                    <div className={styles.event_info}>
                      <img src={MapPin} alt="ícone de localização do evento" />
                      <p className={styles.paragraph}>{event?.address}</p>
                    </div>
                  </article>
                </section>

                <section className={styles.right}>
                  <div className={styles.rightTitle}>Inscrições</div>
                  <section style={{ padding: "16px" }}>
                    <article className={styles.tickets}>
                      <div>
                        <p>
                          <b>{ticket?.name}</b>
                        </p>
                        <p>{ticket?.description}</p>
                      </div>
                    </article>

                    <button disabled={!canSubmit} type="submit">
                      Enviar
                    </button>
                  </section>
                </section>
              </div>

              <>
                {ticket && (
                  <div className={styles.form}>
                    <p className={styles.responsible}>Dados do responsável</p>
                    <div className={styles.single}>
                      <label htmlFor="nickname">
                        {ticket!.category.members > 1
                          ? "Nome do time"
                          : "Nome ou Apelido"}
                      </label>
                      <input
                        className={!!errors.nickname ? styles.invalid : ""}
                        autoFocus
                        id="nickname"
                        placeholder={
                          ticket!.category.members > 1
                            ? "Wodful team"
                            : "João da silva"
                        }
                        type="text"
                        {...register("nickname", {
                          onBlur: (ev) =>
                            getParticipant({
                              accessCode: event?.accessCode!,
                              search: ev.target.value,
                              type: "nickname",
                            }),
                          required: Validation.invalidEmpty,
                          minLength: {
                            value: 3,
                            message: Validation.invalidSM,
                          },
                          maxLength: {
                            value: 50,
                            message: Validation.invalidLG,
                          },
                        })}
                      />
                      <span className={styles.error}>
                        {errors.nickname && errors.nickname.message}
                      </span>
                    </div>
                    <div className={styles.single}>
                      <label htmlFor="responsibleName">
                        Nome do responsável
                      </label>
                      <input
                        className={
                          !!errors.responsibleName ? styles.invalid : ""
                        }
                        id="responsibleName"
                        placeholder="João da silva"
                        type="text"
                        {...register("responsibleName", {
                          required: Validation.invalidEmpty,
                          minLength: {
                            value: 3,
                            message: Validation.invalidSM,
                          },
                          maxLength: {
                            value: 50,
                            message: Validation.invalidLG,
                          },
                        })}
                      />
                      <span className={styles.error}>
                        {errors.responsibleName &&
                          errors.responsibleName.message}
                      </span>
                    </div>
                    <section className={styles.double}>
                      <div className={styles.single}>
                        <label htmlFor="responsibleEmail">
                          E-mail do responsável
                        </label>
                        <input
                          className={
                            !!errors.responsibleEmail ? styles.invalid : ""
                          }
                          id="responsibleEmail"
                          placeholder="joao@email.com"
                          type="email"
                          {...register("responsibleEmail", {
                            required: Validation.invalidEmpty,
                            minLength: {
                              value: 4,
                              message: Validation.invalidSM,
                            },
                            maxLength: {
                              value: 50,
                              message: Validation.invalidLG,
                            },
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: Validation.invalid,
                            },
                          })}
                        />
                        <span className={styles.error}>
                          {errors.responsibleEmail &&
                            errors.responsibleEmail.message}
                        </span>
                      </div>
                      <div className={styles.single}>
                        <label htmlFor="responsiblePhone">
                          Telefone do responsável
                        </label>
                        <input
                          className={
                            !!errors.responsiblePhone ? styles.invalid : ""
                          }
                          id="responsiblePhone"
                          placeholder="xx x xxxx-xxxx"
                          type="tel"
                          {...register("responsiblePhone", {
                            required: Validation.invalidEmpty,
                            minLength: {
                              value: 9,
                              message: Validation.invalidSM,
                            },
                            maxLength: {
                              value: 13,
                              message: Validation.invalidLG,
                            },
                            onChange(event) {
                              formatPhone(event.target.value);
                            },
                          })}
                        />
                        <span className={styles.error}>
                          {errors.responsiblePhone &&
                            errors.responsiblePhone.message}
                        </span>
                      </div>
                    </section>
                    <p className={styles.participants}>
                      {ticket.category.members > 1
                        ? "Dados dos participantes"
                        : "Dados do participante"}
                    </p>
                    {indexes.map((index) => {
                      const participants = `participants[${index}]`;
                      return (
                        <div className={styles.formContainer} key={index}>
                          <div className={styles.single}>
                            <label htmlFor={`${participants}.name`}>
                              {indexes.length > 1
                                ? `Atleta ${index + 1}`
                                : "Nome"}
                            </label>
                            <input
                              id={`${participants}.name`}
                              className={
                                !!errors.participants &&
                                !!errors.participants![index]?.name
                                  ? styles.invalid
                                  : ""
                              }
                              placeholder="João da silva"
                              type="text"
                              {...register(`participants.${index}.name`, {
                                required: Validation.invalidEmpty,
                                minLength: {
                                  value: 4,
                                  message: Validation.invalidSM,
                                },
                                maxLength: {
                                  value: 50,
                                  message: Validation.invalidLG,
                                },
                              })}
                            />
                            <span className={styles.error}>
                              {errors.participants &&
                                errors.participants![index]?.name &&
                                errors.participants![index]?.name?.message}
                            </span>
                          </div>
                          <section className={styles.double}>
                            <div className={styles.single}>
                              <label
                                htmlFor={`${participants}.identificationCode`}
                              >
                                Documento
                              </label>
                              <input
                                id={`${participants}.identificationCode`}
                                className={
                                  !!errors.participants &&
                                  !!errors.participants![index]
                                    ?.identificationCode
                                    ? styles.invalid
                                    : ""
                                }
                                placeholder="RG ou CPF"
                                type="tel"
                                {...register(
                                  `participants.${index}.identificationCode`,
                                  {
                                    required: Validation.invalidEmpty,
                                    onBlur: (ev) =>
                                      getParticipant({
                                        accessCode: event?.accessCode!,
                                        search: ev.target.value,
                                        type: "code",
                                        index,
                                      }),
                                    minLength: {
                                      value: 9,
                                      message: Validation.invalidSM,
                                    },
                                    maxLength: {
                                      value: 20,
                                      message: Validation.invalidLG,
                                    },
                                    onChange(event) {
                                      formatDocument(event.target.value, index);
                                      updateDoc(index, event.target.value);
                                    },
                                    validate: (value) =>
                                      isValidDocument(value) ||
                                      Validation.invalid,
                                  }
                                )}
                              />
                              <span className={styles.error}>
                                {errors.participants &&
                                  errors.participants![index]
                                    ?.identificationCode &&
                                  errors.participants![index]
                                    ?.identificationCode?.message}
                              </span>
                            </div>
                            <div className={styles.single}>
                              <label htmlFor={`${participants}.tShirtSize`}>
                                Camiseta
                              </label>
                              <input
                                id={`${participants}.tShirtSize`}
                                placeholder="GG - Marcus"
                                className={
                                  !!errors.participants &&
                                  !!errors.participants![index]?.tShirtSize
                                    ? styles.invalid
                                    : ""
                                }
                                type="text"
                                {...register(
                                  `participants.${index}.tShirtSize`,
                                  {
                                    required: Validation.invalidEmpty,
                                    minLength: {
                                      value: 1,
                                      message: Validation.invalidSM,
                                    },
                                    maxLength: {
                                      value: 50,
                                      message: Validation.invalidLG,
                                    },
                                  }
                                )}
                              />
                              <span className={styles.error}>
                                {errors.participants &&
                                  errors.participants![index]?.tShirtSize &&
                                  errors.participants![index]?.tShirtSize
                                    ?.message}
                              </span>
                            </div>
                          </section>
                          <section className={styles.double}>
                            <div className={styles.single}>
                              <label htmlFor={`${participants}.city`}>
                                Cidade
                              </label>
                              <input
                                id={`${participants}.city`}
                                className={
                                  !!errors.participants &&
                                  !!errors.participants![index]?.city
                                    ? styles.invalid
                                    : ""
                                }
                                placeholder="Rua do wodful, paraná"
                                type="text"
                                {...register(`participants.${index}.city`, {
                                  required: Validation.invalidEmpty,
                                  minLength: {
                                    value: 4,
                                    message: Validation.invalidSM,
                                  },
                                  maxLength: {
                                    value: 50,
                                    message: Validation.invalidLG,
                                  },
                                })}
                              />
                              <span className={styles.error}>
                                {errors.participants &&
                                  errors.participants![index]?.city &&
                                  errors.participants![index]?.city?.message}
                              </span>
                            </div>
                            <div className={styles.single}>
                              <label htmlFor={`${participants}.affiliation`}>
                                Box do participante
                              </label>
                              <input
                                id={`${participants}.affiliation`}
                                placeholder="CT Wodful"
                                type="text"
                                className={
                                  !!errors.participants &&
                                  !!errors.participants![index]?.affiliation
                                    ? styles.invalid
                                    : ""
                                }
                                {...register(
                                  `participants.${index}.affiliation`,
                                  {
                                    required: Validation.invalidEmpty,
                                    minLength: {
                                      value: 3,
                                      message: Validation.invalidSM,
                                    },
                                    maxLength: {
                                      value: 50,
                                      message: Validation.invalidLG,
                                    },
                                  }
                                )}
                              />
                              <span className={styles.error}>
                                {errors.participants &&
                                  errors.participants![index]?.affiliation &&
                                  errors.participants![index]?.affiliation
                                    ?.message}
                              </span>
                            </div>
                          </section>
                        </div>
                      );
                    })}
                  </div>
                )}
                <ReCAPTCHA
                  sitekey={`${process.env.GATSBY_SIE_KEY}`}
                  onChange={(token) => onChange(token!)}
                  size="normal"
                  onExpired={() => recaptchaCodeRef.current?.reset()}
                />
              </>
            </main>
          </form>
          <Modal
            isOpen={modalState.isOpen}
            onRequestClose={() => {
              setModalState({ isOpen: false });
              if (modalState.type === "success") navigate("/#");
            }}
            className={styles.modal}
            ariaHideApp={false}
            style={{
              overlay: {
                backgroundColor: "#222222BF",
              },
            }}
          >
            <Feedback
              type={modalState.type}
              closeModal={() => setModalState({ isOpen: false })}
            />
          </Modal>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
