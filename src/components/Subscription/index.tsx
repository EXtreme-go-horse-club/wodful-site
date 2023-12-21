import * as React from "react";
import * as styles from "./styles.module.css";
import MapPin from "../../images/map-pin.svg";
import Calendar from "../../images/calendar-black.svg";
import { EventResponse, Ticket } from "../../models/EventResponse";
import { EventService } from "../../services/events";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IParticipantForm } from "../../models/ParticipantDTO";
import { navigate } from "gatsby";
import { isValidDocument, regexOnlyNumber } from "../../utils";
import { SubscriptionService } from "../../services/subscription";

interface ISubscriptionData {
  accessCode: string;
}
const Validation = {
  invalidEmpty: "Preencher campo",
  invalid: "Campo inválido",
  invalidSM: "Muito curto",
  invalidLG: "Muito longo",
};

export const SubscriptionData = ({ accessCode }: ISubscriptionData) => {
  const [event, setEvent] = useState<EventResponse>();
  const [ticket, setTicket] = useState<Ticket>();
  const [indexes, setIndexes] = useState<number[]>([]);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IParticipantForm>({
    mode: "onChange",
  });

  const getEvent = React.useCallback(
    async (access: string, ticketId: string) => {
      await new EventService()
        .getEvent(access)
        .then((eventResponse: EventResponse) => {
          setIndexes([]);
          let singleTicket = eventResponse.tickets.find(
            (ticket: Ticket) => ticket.id === ticketId
          );
          setEvent(eventResponse);
          setTicket(singleTicket);
          console.log(singleTicket);
          for (let index = 0; index < singleTicket!.category.members; index++) {
            setIndexes((indexes) => [...indexes, index]);
          }
        });
    },
    []
  );

  const PostSubscription = React.useCallback(
    async (subscription: IParticipantForm) => {
      await new SubscriptionService()
        .postSubscription(subscription)
        .then((response: any) => {
          console.log(response);
        });
    },
    []
  );

  const onSubmit = (subscription: IParticipantForm) => {
    subscription.ticketId = ticket!.id;
    PostSubscription(subscription);
  };

  const formatPhone = (phoneNumber: string) => {
    phoneNumber = regexOnlyNumber(phoneNumber);
    setValue("responsiblePhone", phoneNumber);
  };

  useEffect(() => {
    const ticketStorage = localStorage.getItem("@Wodful:ticket");

    if (!ticketStorage) navigate(`/event/${accessCode}/`);
    getEvent(accessCode, ticketStorage!.replaceAll('"', ""));
  }, [getEvent]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <main className={styles.main}>
          <div className={styles.headding}>
            <section className={styles.title}>
              <article className={styles.event_data}>
                <h2>{event?.name}</h2>
                <div className={styles.event_info}>
                  <img src={Calendar} alt="Data" />
                  <p>
                    {event?.startDate} até {event?.endDate}
                  </p>
                </div>
                <div className={styles.event_info}>
                  <img src={MapPin} alt="Localização" />
                  <p>{event?.address}</p>
                </div>
              </article>
            </section>
            <section className={styles.right}>
              <div className={styles.rightTitle}>Inscrições</div>
              <section>
                <article className={styles.tickets}>
                  <div>
                    <p>
                      <b>{ticket?.name}</b>
                    </p>
                    <p>{ticket?.description}</p>
                  </div>
                </article>
                <button type="submit">Enviar</button>
              </section>
            </section>
          </div>
          {ticket && (
            <div className={styles.form}>
              <p className={styles.participants}>
                {ticket.category.members > 1
                  ? "Dados dos participantes"
                  : "Dados do participante"}
              </p>
              <div className={styles.single}>
                <label htmlFor="nickname">Nome</label>
                <input
                  className={!!errors.nickname ? styles.invalid : ""}
                  id="nickname"
                  placeholder={
                    ticket!.category.members > 1 ? "Nome do time" : "Apelido"
                  }
                  type="text"
                  {...register("nickname", {
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
                  {errors.nickname && errors.nickname.message}
                </span>
              </div>
              <div className={styles.single}>
                <label htmlFor="responsibleName">Nome do responsável</label>
                <input
                  className={!!errors.responsibleName ? styles.invalid : ""}
                  id="responsibleName"
                  placeholder="Nome do responsável"
                  type="text"
                  {...register("responsibleName", {
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
                  {errors.responsibleName && errors.responsibleName.message}
                </span>
              </div>
              <section className={styles.double}>
                <div className={styles.single}>
                  <label htmlFor="responsibleEmail">
                    E-mail do responsável
                  </label>
                  <input
                    className={!!errors.responsibleEmail ? styles.invalid : ""}
                    id="responsibleEmail"
                    placeholder="E-mail do responsável"
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
                    {errors.responsibleEmail && errors.responsibleEmail.message}
                  </span>
                </div>
                <div className={styles.single}>
                  <label htmlFor="responsiblePhone">
                    Telefone do responsável
                  </label>
                  <input
                    className={!!errors.responsiblePhone ? styles.invalid : ""}
                    id="responsiblePhone"
                    placeholder="Número do telefone"
                    type="text"
                    {...register("responsiblePhone", {
                      required: Validation.invalidEmpty,
                      minLength: {
                        value: 4,
                        message: Validation.invalidSM,
                      },
                      maxLength: {
                        value: 50,
                        message: Validation.invalidLG,
                      },
                      onChange(event) {
                        formatPhone(event.target.value);
                      },
                    })}
                  />
                  <span className={styles.error}>
                    {errors.responsiblePhone && errors.responsiblePhone.message}
                  </span>
                </div>
              </section>
              {indexes.map((index) => {
                const participants = `participants[${index}]`;
                return (
                  <div className={styles.formContainer} key={index}>
                    <div className={styles.single}>
                      <label htmlFor={`${participants}.name`}>
                        {indexes.length > 1 ? `Atleta ${index + 1}` : "Nome"}
                      </label>
                      <input
                        id={`${participants}.name`}
                        className={
                          !!errors.participants &&
                          !!errors.participants![index]?.name
                            ? styles.invalid
                            : ""
                        }
                        placeholder="Nome do participante"
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
                        <label htmlFor={`${participants}.identificationCode`}>
                          Documento
                        </label>
                        <input
                          id={`${participants}.identificationCode`}
                          placeholder="Informe o RG ou CPF"
                          type="text"
                          {...register(
                            `participants.${index}.identificationCode`,
                            {
                              required: Validation.invalidEmpty,
                              minLength: {
                                value: 9,
                                message: Validation.invalidSM,
                              },
                              maxLength: {
                                value: 20,
                                message: Validation.invalidLG,
                              },
                              validate: (value) =>
                                isValidDocument(value) || Validation.invalid,
                            }
                          )}
                        />
                      </div>
                      <div className={styles.single}>
                        <label htmlFor={`${participants}.tShirtSize`}>
                          Camiseta
                        </label>
                        <input
                          id={`${participants}.tShirtSize`}
                          placeholder="Tamanho"
                          type="text"
                          {...register(`participants.${index}.tShirtSize`, {
                            required: Validation.invalidEmpty,
                            minLength: {
                              value: 1,
                              message: Validation.invalidSM,
                            },
                            maxLength: {
                              value: 10,
                              message: Validation.invalidLG,
                            },
                          })}
                        />
                      </div>
                    </section>
                    <section className={styles.double}>
                      <div className={styles.single}>
                        <label htmlFor={`${participants}.city`}>Cidade</label>
                        <input
                          id={`${participants}.city`}
                          placeholder="Cidade do participante"
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
                      </div>
                      <div className={styles.single}>
                        <label htmlFor={`${participants}.affiliation`}>
                          Box
                        </label>
                        <input
                          id={`${participants}.affiliation`}
                          placeholder="Box do participante"
                          type="text"
                          {...register(`participants.${index}.affiliation`, {
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
                      </div>
                    </section>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </form>
    </div>
  );
};
