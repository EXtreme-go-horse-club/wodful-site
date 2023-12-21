export interface IParticipantForm {
  nickname: string;
  responsibleName: string;
  responsibleEmail: string;
  responsiblePhone: string;
  ticketId: string;
  participants: IParticipantDTO[];
}

export interface IParticipantDTO {
  name: string;
  identificationCode: string;
  affiliation: string;
  city: string;
  tShirtSize: string;
}
