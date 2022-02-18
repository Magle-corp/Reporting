// Use.
import styled, { css } from 'styled-components';

const StyledSubmit = styled.input<{ isValid: boolean }>`
  ${({ isValid }) =>
    isValid &&
    css`
      //background-color: ${({ theme }) => theme.color.primary};
      background-color: green;
    `}

  ${({ isValid }) =>
    !isValid &&
    css`
      //background-color: ${({ theme }) => theme.color.primary};
      background-color: red;
    `}
`;

export { StyledSubmit };
