export interface EventResponse {
  accessCode: string;
  startDate: Date;
  endDate: Date;
  banner: string;
  address: string;
  name: string;
  description: string | null;
  tickets: Ticket[];
}

export interface Ticket {
  id: number;
  description: string;
  price: string;
  name: string;
  category: Category;
}

interface Category {
  isTeam: string;
  members: number;
}
