// Use.
import { useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context';
import { Context, Screen } from '../type';
import { useGetScreensByArgs } from '../hook';
import { Text } from '../ui';

/**
 * Provide component Navbar.
 */
const Navbar = () => {
  const { setScreen, availableScreens } = useAppContext() as Context;
  const [itemMenus] = useState<Screen[]>(
    useGetScreensByArgs(availableScreens, ['overview'])
  );

  return (
    <StyledNavbar>
      <StyledList>
        {itemMenus.map((item) => (
          <div key={item.label + '_' + Math.random() * 10}>
            {item.args === 'overview' && (
              <StyledListItem
                onClick={() => {
                  setScreen(item);
                }}
              >
                {item.icon}
                <Text as="span" variant="h4">
                  {item.label}
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
  margin: 30px 0;

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
