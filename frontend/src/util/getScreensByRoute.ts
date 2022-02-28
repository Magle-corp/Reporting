// Use.
import { Screen } from '../type';

/**
 * Return an array of filtered screens.
 *
 * @param availableScreens
 *    Array of Screen, available screens.
 * @param route
 *    String, value used for filter.
 */
const getScreensByRoute = (availableScreens: Screen[], route: string) => {
  return availableScreens.filter(
    (availableScreen) => availableScreen.route === route
  );
};

export { getScreensByRoute };
