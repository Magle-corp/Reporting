// Use.
import { Screen } from '../type';

/**
 * Return an array of filtered screens.
 *
 * @param availableScreens
 *    Array of Screen, available screens.
 * @param isAuthenticated
 *    boolean, true if user is authenticated.
 */
const getAuthorizedScreens = (
  availableScreens: Screen[],
  isAuthenticated: boolean
) => {
  return availableScreens.filter((availableScreen) =>
    isAuthenticated
      ? availableScreen.authenticated
      : !availableScreen.authenticated
  );
};

export { getAuthorizedScreens };
