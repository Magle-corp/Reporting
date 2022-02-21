// Use.
import { createContext, useContext, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

// @ts-ignore
const AppContext = createContext();

/**
 * Custom React context.
 */
export function AppWrapper({ children }: Props) {
  const [screen, setScreen] = useState<string>('add_intervention');

  // States shared over the application.
  let sharedState = {
    screen,
    setScreen,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
