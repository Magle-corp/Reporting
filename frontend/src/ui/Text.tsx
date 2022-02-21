// Use.
import styled, { css } from 'styled-components';

interface Props {
  variant?: 'p' | 'h1' | 'h2' | 'h3' | 'h4';
}

/**
 * Provide ui component Text.
 *
 * @param variant
 *    string, desired typography style.
 */
const Text = styled.p<Props>`
  ${({ theme, variant }) =>
    variant &&
    css`
      ${theme.typography[variant]}
    `}
  box-sizing: border-box;
`;

export { Text };
