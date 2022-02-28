// Use.
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { availableScreens } from './navigation';
import { getAuthorizedScreens, getScreensByRoute } from './util';
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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [screen, setScreen] = useState<Screen | []>([]);

  const authorizedScreens = getAuthorizedScreens(
    availableScreens,
    isAuthenticated
  );

  useEffect(() => {
    const welcomeScreen = getScreensByRoute(
      authorizedScreens,
      isAuthenticated ? 'homepage' : 'signin'
    )[0];
    setScreen(welcomeScreen);
  }, [isAuthenticated]);

  // States shared over the application.
  let sharedState = {
    setIsAuthenticated,
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
