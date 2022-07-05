import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html{
  font-size: 62.5%;
  margin: 0;
  padding: 0;
  outline: 0;  
  box-sizing: border-box;

  font-family: sans-serif;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
	display: grid;
	place-content: center;
  font-size: 1.6rem;
  width: 100vw;
}

outline: 1px solid tan;
background-color: teal;
`

export { GlobalStyle }
