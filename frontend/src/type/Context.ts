// Type for custom React context.

interface Context {
  screen: 'signin' | 'add_contract' | 'add_customer';
  setScree: Function;
}

export type { Context };
