// Type for entity User.

interface User {
  id?: number;
  username: string;
  password?: string;
  roles?: string[];
}

export type { User };
