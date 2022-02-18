// Use.
import styled, { css } from 'styled-components';

/**
 * Provide ui component TextArea.
 */
const StyledTextArea = styled.textarea<{ isValid: boolean | null }>`
  box-sizing: border-box;
  ${({ theme }) => theme.typography.p};
  max-width: 400px;
  padding: 4px;
  margin-top: 15px;
  border-radius: 3px;
  //border: 2px solid ${({ theme }) => theme.color.darkGrey};
  border: 2px solid black;
  resize: none;

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
      // border: 2px solid ${({ theme }) => theme.color.darkGrey};
      border: 2px solid black;
    `}
`;

export { StyledTextArea };
