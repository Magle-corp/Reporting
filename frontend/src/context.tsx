// Use.
import { createContext, useContext, ReactNode, useState } from 'react';
import { availableScreens } from './navigation';
import { Screen } from './type';

interface Props {
  children: ReactNode;
}

// @ts-ignore
const AppContext = createContext();

/**
 * Custom React context.
 */
export function AppWrapper({ children }: Props) {
  const [screen, setScreen] = useState<Screen>({
    label: "Page d'accueil",
    route: 'homepage',
    args: 'overview',
    component: <></>,
  });

  // States shared over the application.
  let sharedState = {
    screen,
    setScreen,
    availableScreens,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
