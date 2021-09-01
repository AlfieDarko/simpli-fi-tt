import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rubik';
    src: url("/fonts/Rubik-Variable.ttf") format('truetype');
  }
  font-family: 'Rubik', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
`;
