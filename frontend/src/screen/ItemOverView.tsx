// Use.
import styled from 'styled-components';
import { useAppContext } from '../context';
import { Context } from '../type';

const StyledContainer = styled.div`
  box-sizing: border-box;
  background-color: lightyellow;
  display: flex;
  flex-direction: row;
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  ${({ theme }) => theme.typography.button}
`;

/**
 * Provide screen ItemOverView.
 */
const ItemOverView = () => {
  const { screen, setScreen } = useAppContext() as Context;
  return (
    <StyledContainer>
      <StyledButton
        onClick={() => setScreen(`${screen.replace('overview', 'add')}`)}
      >
        Créer
      </StyledButton>
      <StyledButton
        onClick={() => setScreen(`${screen.replace('overview', 'read')}`)}
      >
        Voir
      </StyledButton>
    </StyledContainer>
  );
};

export { ItemOverView };
