export interface EventResponse {
  accessCode: string;
  startDate: string;
  endDate: string;
  banner: string;
  address: string;
  name: string;
  description: string | null;
  tickets: Ticket[];
}

export interface Ticket {
  id: string;
  description: string;
  price: string;
  name: string;
  category: Category;
}

interface Category {
  isTeam: string;
  members: number;
}
