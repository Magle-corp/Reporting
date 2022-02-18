import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './theme';
import { AppWrapper } from './context';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <App />
      </AppWrapper>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
