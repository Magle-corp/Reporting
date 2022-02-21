// Use.
import styled, { css } from 'styled-components';

/**
 * Provide ui component Container.
 *
 * @param spacing
 *    number, space between two items.
 * @param direction
 *    horizontal | vertical, the flex direction.
 * @param center
 *    boolean, if true items are center.
 */
const Container = styled.div<{
  spacing?: number;
  direction: 'horizontal' | 'vertical';
  center?: boolean;
}>`
  box-sizing: border-box;
  min-width: 500px;

  ${({ direction, center, spacing }) =>
    direction === 'horizontal' &&
    css`
      display: flex;
      flex-direction: row;
      align-items: ${center ? 'center' : 'left'};

      > *:not(:first-child) {
        margin-left: ${spacing}px;
      }
    `}

  ${({ direction, center, spacing }) =>
    direction === 'vertical' &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: ${center ? 'center' : 'left'};

      > *:not(:first-child) {
        margin-top: ${spacing}px;
      }
    `}
`;

export { Container };
