import { IParticipantForm } from "../../models/ParticipantDTO";
import wodfulApi from "../api";
import wodfulKey from "../key";

export class SubscriptionService {
  constructor(private readonly path = "/public/events/subscriptions/") {}

  async postSubscription(participants: IParticipantForm): Promise<any> {
    const event: any = await wodfulApi.post(this.path, participants, {
      headers: {
        ["x-api-key"]: wodfulKey,
      },
    });

    return event;
  }
}
