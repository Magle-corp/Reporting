// Use.
import styled from 'styled-components';
import { useAppContext } from '../context';
import { Context } from '../type';
import { Text } from '../ui';

/**
 * Provide component Navbar.
 */
const Navbar = () => {
  const { setScreen, availableScreens } = useAppContext() as Context;

  return (
    <StyledNavbar>
      <StyledList>
        {availableScreens.map((availableScreen) => (
          <div key={availableScreen.label + '_' + Math.random() * 10}>
            {availableScreen.args === 'overview' && (
              <StyledListItem
                onClick={() => {
                  setScreen(availableScreen);
                }}
              >
                {availableScreen.icon}
                <Text as="span" variant="h4">
                  {availableScreen.label}
                </Text>
              </StyledListItem>
            )}
          </div>
        ))}
      </StyledList>
    </StyledNavbar>
  );
};

export { Navbar };

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
