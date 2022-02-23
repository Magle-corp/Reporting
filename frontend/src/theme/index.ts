// Use.
import { createGlobalStyle } from 'styled-components';
import typography from './typography';
import breakpoint from './breakpoint';
import color from './color';

const theme: object = {
  typography,
  breakpoint,
  color,
};

export { theme };

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  * {
    padding: 0;
    margin: 0;
  }
`;
