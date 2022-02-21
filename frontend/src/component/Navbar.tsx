// Use.
import styled from 'styled-components';
import { useAppContext } from '../context';
import { Context } from '../type';
import { Text } from '../ui';
import { Broom, Contract, Customer } from '../theme/icon';

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  width: max-content;
  margin: 30px auto;

  > *:not(:first-child) {
    margin-left: 20px;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  > *:not(:first-child) {
    margin-left: 30px;
  }
`;

const StyledListItem = styled.li`
  > *:not(:first-child) {
    margin-left: 10px;
  }
`;

/**
 * Provide component Navbar.
 */
const Navbar = () => {
  const { setScreen } = useAppContext() as Context;

  const screens = [
    {
      label: 'Clients',
      route: 'customer',
      icon: <Customer size={20} />,
    },
    {
      label: 'Contrats',
      route: 'contract',
      icon: <Contract size={20} />,
    },
    {
      label: 'Interventions',
      route: 'intervention',
      icon: <Broom size={25} />,
    },
  ];

  return (
    <StyledNavbar>
      <StyledList>
        {screens.map((screen) => (
          <StyledListItem
            key={screen.label + '_' + Math.random() * 10}
            onClick={() => {
              setScreen(`overview_${screen.route}`);
            }}
          >
            {screen.icon}
            <Text as="span" variant="h4">
              {screen.label}
            </Text>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledNavbar>
  );
};

export { Navbar };
