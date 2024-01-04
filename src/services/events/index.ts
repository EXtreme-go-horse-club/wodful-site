import { APIResponse } from "../../models/AxiosResponse";
import { EventResponse } from "../../models/EventResponse";
import wodfulApi from "../api";

export class EventService {
  constructor(private readonly path = "/public/events/") {}

  async getEvent(accessCode: string): Promise<EventResponse> {
    const url = this.path + `${accessCode.toUpperCase()}`;
    const event: APIResponse<EventResponse> = await wodfulApi.get(url);

    return event.data as unknown as EventResponse;
  }
}
