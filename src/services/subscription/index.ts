import { IParticipantForm } from "../../models/ParticipantDTO";
import wodfulApi from "../api";

export class SubscriptionService {
  constructor(private readonly path = "/public/events/subscriptions/") {}

  async postSubscription(participants: IParticipantForm): Promise<any> {
    const event: any = await wodfulApi.post(this.path, participants, {
      headers: {
        ["x-api-key"]: `${process.env.GATSBY_apiKey}`,
      },
    });

    return event;
  }
}
