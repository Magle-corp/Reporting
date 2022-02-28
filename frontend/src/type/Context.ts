// Use.
import { Screen } from './Screen';

// Type for custom React context.

interface Context {
  isAuthenticated: boolean;
  setIsAuthenticated: Function;
  screen: Screen;
  setScreen: Function;
  authorizedScreens: Screen[];
}

export type { Context };
