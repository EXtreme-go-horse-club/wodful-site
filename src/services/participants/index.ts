import { regexOnlyNumber } from "../../utils";
import wodfulApi from "../api";

interface ParticipantRequest {
  accessCode: string;
  search: string;
  ticket?: string;
}

export class ParticipantsService {
  constructor(private readonly path = "/public/championships") {}
  async getParticipantByNickname({
    accessCode,
    search,
    ticket,
  }: ParticipantRequest): Promise<any> {
    const participant: any = await wodfulApi.get(
      `${this.path}/${accessCode}/participants?nickname=${search}&ticket=${ticket}`,
      {
        headers: {
          ["x-api-key"]: `${process.env.GATSBY_WODFUL_API_KEY}`,
        },
      }
    );

    return participant;
  }

  async getParticipantByCode({
    accessCode,
    search,
  }: ParticipantRequest): Promise<any> {
    const code = regexOnlyNumber(search);
    const participant: any = await wodfulApi.get(
      `${this.path}/${accessCode}/participants?code=${code}`,
      {
        headers: {
          ["x-api-key"]: `${process.env.GATSBY_WODFUL_API_KEY}`,
        },
      }
    );

    return participant;
  }
}
