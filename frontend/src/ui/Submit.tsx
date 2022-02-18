// Use.
import styled, { css } from 'styled-components';

/**
 * Provide ui component Submit.
 */
const StyledSubmit = styled.input<{ isValid: boolean }>`
  ${({ theme }) => theme.typography.p};
  width: max-content;
  padding: 6px 8px;
  border: 2px solid ${({ theme }) => theme.color.black};
  border-radius: 3px;

  ${({ isValid }) =>
    isValid &&
    css`
      cursor: pointer;
    `}

  ${({ isValid }) =>
    !isValid &&
    css`
      cursor: not-allowed;
    `};
`;

export { StyledSubmit };
