// Type for entity Contract.

interface Contract {
  id?: number;
  customerId: string;
  contractTypeId: string;
  description: string;
  rate: string;
}

export type { Contract };
