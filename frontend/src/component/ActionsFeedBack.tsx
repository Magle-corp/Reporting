// Use.
import styled from 'styled-components';
import { Text, Container } from '../ui';
import { Cross } from '../theme/icon';

interface Props {
  isValid: boolean;
}

const StyledContainer = styled(Container)<{ isValid: boolean }>`
  align-items: center;
  justify-content: space-between;
  padding: 6px 9px;
  border: 2px solid
    ${({ theme, isValid }) =>
      isValid ? theme.color.success : theme.color.error};
  border-radius: 3px;
`;

/**
 * Provide component ActionsFeedBack.
 *
 * @param isValid
 *    boolean, depend on the form submission status.
 */
const ActionsFeedBack = ({ isValid }: Props) => {
  return (
    <>
      {isValid ? (
        <StyledContainer direction="horizontal" isValid={isValid}>
          <Text variant="p">Enregistré</Text>
          <Cross size={20} />
        </StyledContainer>
      ) : (
        <StyledContainer direction="horizontal" isValid={isValid}>
          <Text variant="p">Un problème est survenu</Text>
          <Cross size={20} />
        </StyledContainer>
      )}
    </>
  );
};

export { ActionsFeedBack };
