import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body{
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.color};
    transition: all .5s linear;
  }

  html, body {
    overflow-x: hidden;
  }
`;

export const lightTheme = {
  body: '#fff',
  color: '#121212'
}

export const darkTheme = {
  body: '#121212',
  color: '#fff'
}

export default GlobalStyle;