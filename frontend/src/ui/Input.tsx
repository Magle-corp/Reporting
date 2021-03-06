// Use.
import styled, { css } from 'styled-components';

/**
 * Provide ui component Input.
 *
 * @param isValid
 *    boolean | null, depend on the form state.
 */
const Input = styled.input<{ isValid: boolean | null }>`
  ${({ theme }) => theme.typography.p};
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  margin: 15px 0 10px 0;
  border-radius: 3px;

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
    `};
`;

export { Input };
