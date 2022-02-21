// Use.
import { Screen } from '../type';

/**
 * Return an array of filtered screens.
 *
 * @param availableScreens
 *    Array of Screen, available screens.
 * @param args
 *    Array of string, values used for filter.
 */
const useGetScreensByArgs = (
  availableScreens: Screen[],
  args: Array<'overview' | 'list' | 'add'>
) => {
  return availableScreens.filter((availableScreen) =>
    args.find((element) => element === availableScreen.args)
  );
};

export { useGetScreensByArgs };
