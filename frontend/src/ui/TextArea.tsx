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
  resize: none;

  ${({ isValid }) =>
    isValid &&
    css`
      border: 2px solid ${({ theme }) => theme.color.success};
    `}

  ${({ isValid }) =>
    !isValid &&
    css`
      border: 2px solid ${({ theme }) => theme.color.error};
    `}
  
  ${({ isValid }) =>
    isValid === null &&
    css`
      border: 2px solid ${({ theme }) => theme.color.black};
    `}
`;

export { StyledTextArea };
