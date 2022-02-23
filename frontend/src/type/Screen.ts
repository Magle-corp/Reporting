// Use.
import { ReactNode } from 'react';

// Type for entity Screen.

interface Screen {
  label: string;
  route: 'homepage' | 'signin' | 'contract' | 'customer' | 'intervention';
  args?: 'overview' | 'add' | 'list';
  authenticated: boolean;
  component: ReactNode;
  icon?: ReactNode;
}

export type { Screen };
