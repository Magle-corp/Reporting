// Type for custom React context.

interface Context {
  screen:
    | 'signin'
    | 'overview'
    | 'add_contract'
    | 'add_customer'
    | 'add_intervention';
  setScreen: Function;
}

export type { Context };
