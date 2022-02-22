// Use.
import { Screen } from '../type';

/**
 * Return an array of filtered screens.
 *
 * @param currentScreen
 *    Screen, the current screen.
 * @param availableScreens
 *    Array of Screen, available screens.
 * @param args
 *    Array of string, values used for filter.
 */
const getScreensByRoute = (
  currentScreen: Screen,
  availableScreens: Screen[],
  args: Array<'overview' | 'list' | 'add'>
) => {
  return availableScreens.filter(
    (availableScreen) =>
      availableScreen.route === currentScreen.route &&
      args.find((element) => element === availableScreen.args)
  );
};

export { getScreensByRoute };
