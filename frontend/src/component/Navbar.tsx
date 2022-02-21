// Use.
import { MouseEvent } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context';
import { Context } from '../type';
import { Text } from '../ui';

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  width: max-content;
  margin: 30px auto;

  > *:not(:first-child) {
    margin-left: 20px;
  }
`;

/**
 * Provide component Navbar.
 */
const Navbar = () => {
  const { setScreen } = useAppContext() as Context;

  const handleNavigation = (event: MouseEvent<HTMLElement>, screen: string) => {
    event.preventDefault();
    setScreen(screen);
  };

  return (
    <StyledNavbar>
      <div
        onClick={(event) => handleNavigation(event, 'interventions')}
        id="interventions"
      >
        <Text variant="h4">Interventions</Text>
      </div>
      <div
        onClick={(event) => handleNavigation(event, 'contracts')}
        id="interventions"
      >
        <Text variant="h4">Contrats</Text>
      </div>
      <div
        onClick={(event) => handleNavigation(event, 'customers')}
        id="interventions"
      >
        <Text variant="h4">Clients</Text>
      </div>
    </StyledNavbar>
  );
};

export { Navbar };
