import wodfulApi from "../api";
import { EventResponse } from "../../models/EventResponse";
import { APIResponse } from "../../models/AxiosResponse";

export class EventService {
  constructor(private readonly path = "/public/events/") {}

  async getEvent(accessCode: string): Promise<EventResponse> {
    const url = this.path + `${accessCode}`;
    const event: APIResponse<EventResponse> = await wodfulApi.get(url);

    return event.data as unknown as EventResponse;
  }
}
