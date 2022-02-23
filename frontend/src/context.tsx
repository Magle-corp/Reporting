// Use.
import { createContext, useContext, ReactNode, useState } from 'react';
import { availableScreens } from './navigation';
import { getAuthorizedScreens } from './util';
import { Screen } from './type';
import { Homepage } from './screen';

interface Props {
  children: ReactNode;
}

// @ts-ignore
const AppContext = createContext();

/**
 * Custom React context.
 */
export function AppWrapper({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [screen, setScreen] = useState<Screen>({
    label: "Page d'accueil",
    route: 'homepage',
    authenticated: false,
    component: <Homepage />,
  });

  const authorizedScreens = getAuthorizedScreens(
    availableScreens,
    isAuthenticated
  );

  // States shared over the application.
  let sharedState = {
    screen,
    setScreen,
    authorizedScreens,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
