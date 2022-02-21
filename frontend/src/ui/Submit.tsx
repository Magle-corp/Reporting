// Use.
import styled, { css } from 'styled-components';

/**
 * Provide ui component Submit.
 */
const StyledSubmit = styled.input<{ isValid: boolean | undefined }>`
  ${({ theme }) => theme.typography.p};
  box-sizing: border-box;
  width: max-content;
  padding: 6px 8px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 3px;

  ${({ isValid }) =>
    isValid &&
    css`
      border: 2px solid ${({ theme }) => theme.color.success};
      cursor: pointer;
    `}

  ${({ isValid }) =>
    !isValid &&
    css`
      border: 2px solid ${({ theme }) => theme.color.black};
      cursor: not-allowed;
    `};
`;

export { StyledSubmit };
