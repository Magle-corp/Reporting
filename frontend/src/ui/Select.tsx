// Use.
import styled, { css } from 'styled-components';

/**
 * Provide ui component Select.
 */
const StyledSelect = styled.select<{ isValid: boolean | null }>`
  padding: 6px;
  border: 2px solid ${({ theme }) => theme.color.black};
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

export { StyledSelect };
