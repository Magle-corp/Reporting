// Type for entity User.

interface User {
  id?: number;
  email: string;
  password?: string;
  roles?: string[];
}

export type { User };
