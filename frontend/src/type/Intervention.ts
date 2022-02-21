// Type for entity Intervention.

interface Intervention {
  id?: number;
  date: string;
  quantity: string;
  customerId: string;
  contractId: string;
}

export type { Intervention };
