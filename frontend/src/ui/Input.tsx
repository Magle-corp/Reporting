// Use.
import styled, { css } from 'styled-components';

/**
 * Provide ui component Input.
 */
const StyledInput = styled.input<{ isValid: boolean | null }>`
  ${({ theme }) => theme.typography.p};
  max-width: 400px;
  padding: 4px;
  margin-top: 15px;
  border-radius: 3px;

  ${({ isValid }) =>
    isValid &&
    css`
      //border: 2px solid ${({ theme }) => theme.color.primary};
      border: 2px solid green;
    `}

  ${({ isValid }) =>
    !isValid &&
    css`
      //border: 2px solid ${({ theme }) => theme.color.error};
      border: 2px solid red;
    `}
  
  ${({ isValid }) =>
    isValid === null &&
    css`
      //border: 2px solid ${({ theme }) => theme.color.darkGrey};
      border: 2px solid black;
    `};
`;

export { StyledInput };
