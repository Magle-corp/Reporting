// Use.
import styled from 'styled-components';
import { Text } from '../ui';

interface Props {
  isValid: boolean;
}

const StyledContainer = styled.div`
  background-color: lightcoral;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
`;

/**
 * Provide component ActionsFeedBack.
 */
const ActionsFeedBack = ({ isValid }: Props) => {
  return (
    <>
      {isValid ? (
        <StyledContainer>
          <Text variant="h4">Enregistré</Text>
        </StyledContainer>
      ) : (
        <StyledContainer>
          <Text>Un problème est survenu</Text>
        </StyledContainer>
      )}
    </>
  );
};

export { ActionsFeedBack };
