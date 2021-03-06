// Use.
import styled, { css } from 'styled-components';

/**
 * Provide ui component TextArea.
 *
 * @param isValid
 *    boolean | null, depend on the form state.
 */
const TextArea = styled.textarea<{ isValid: boolean | null }>`
  box-sizing: border-box;
  ${({ theme }) => theme.typography.p};
  max-width: 400px;
  padding: 4px;
  margin: 15px 0 10px 0;
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

export { TextArea };
