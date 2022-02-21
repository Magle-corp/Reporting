// Use.
import { useState, useEffect } from 'react';
import { useAppContext } from '../context';
import { Context, Screen } from '../type';
import { Text, Container } from '../ui';

/**
 * Provide screen ItemOverView.
 */
const ItemOverView = () => {
  const { screen, setScreen, availableScreens } = useAppContext() as Context;
  const [itemMenus, setItemMenus] = useState<Screen[]>();

  // Get screen related menus.
  useEffect(() => {
    setItemMenus(
      availableScreens.filter(
        (element) =>
          element.route === screen.route &&
          (element.args === 'list' || element.args === 'add')
      )
    );
  }, [screen, availableScreens]);

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
