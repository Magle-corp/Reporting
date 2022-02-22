// Use.
import { useAppContext } from '../context';
import { Context } from '../type';
import { getScreensByRoute } from '../util';
import { Text, Container } from '../ui';

/**
 * Provide screen ItemOverView.
 */
const ItemOverView = () => {
  const { screen, setScreen, authorizedScreens } = useAppContext() as Context;
  const itemMenus = getScreensByRoute(screen, authorizedScreens, [
    'list',
    'add',
  ]);

  return (
    <Container spacing={30} direction="vertical">
      <Container spacing={10} direction="horizontal" center={true}>
        {screen.icon}
        <Text variant="h3">{screen.label}</Text>
      </Container>
      <Container spacing={30} direction="vertical">
        {itemMenus?.map((item) => (
          <Container
            direction="vertical"
            key={item.label + '_' + Math.random() * 10}
            onClick={() => {
              setScreen(item);
            }}
          >
            <Text variant="h4">{item.label}</Text>
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export { ItemOverView };
