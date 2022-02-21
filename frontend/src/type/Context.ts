// Use.
import { Screen } from './Screen';

// Type for custom React context.

interface Context {
  screen: Screen;
  setScreen: Function;
  availableScreens: Screen[];
}

export type { Context };
