// Use.
import styled from 'styled-components';

/**
 * Provide ui component Container.
 */
const StyledContainer = styled.div<{ spacing?: string }>`
  box-sizing: border-box;

  > *:not(:first-child) {
    margin-top: ${({ spacing }) => spacing};
  }
`;

export { StyledContainer };
