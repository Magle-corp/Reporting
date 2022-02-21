// Use.
import styled, { css } from 'styled-components';

/**
 * Provide ui component Select.
 *
 * @param isValid
 *    boolean | null, depend on the form state.
 */
const Select = styled.select<{ isValid: boolean | null }>`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  margin: 15px 0 10px 0;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.white};

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

export { Select };
