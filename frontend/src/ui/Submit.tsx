// Use.
import styled, { css } from 'styled-components';

/**
 * Provide ui component Submit.
 *
 * @param isValid
 *    boolean | undefined, depend on the form state.
 */
const Submit = styled.input<{ isValid: boolean | undefined }>`
  ${({ theme }) => theme.typography.button};

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

export { Submit };
