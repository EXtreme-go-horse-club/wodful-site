import wodfulApi from "../api";
import { EventResponse } from "../../models/EventResponse";
import { APIResponse } from "../../models/AxiosResponse";
import { ChampionshipResponse } from "../../models/ChampionshipResponse";

export class ChampionshipService {
  constructor(private readonly path = "/public/events/") {}

  async getChampionship(): Promise<ChampionshipResponse[]> {
    const event: APIResponse<ChampionshipResponse[]> = await wodfulApi.get(
      this.path
    );

    return event.data as unknown as ChampionshipResponse[];
  }
}
