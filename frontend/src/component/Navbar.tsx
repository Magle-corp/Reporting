// Use.
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

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  > *:not(:first-child) {
    margin-left: 30px;
  }
`;

/**
 * Provide component Navbar.
 */
const Navbar = () => {
  const { setScreen } = useAppContext() as Context;

  const screens = ['intervention', 'contract', 'customer'];

  return (
    <StyledNavbar>
      <StyledList>
        {screens.map((screen) => (
          <li
            key={screen + '_' + Math.random() * 10}
            onClick={() => {
              setScreen(`overview_${screen}`);
            }}
          >
            <Text as="span" variant="h4">
              {screen}
            </Text>
          </li>
        ))}
      </StyledList>
    </StyledNavbar>
  );
};

export { Navbar };
