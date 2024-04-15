import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`


:root {
  --font-family: "Roboto", sans-serif;
  --font-weight-medium: 500;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
  --primary-transition: 0.3s ease-in-out;
}

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  /* font-family: "Roboto", sans-serif; */
  color: ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.background};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.list {
  margin: 0;
  padding: 0;
  list-style: none;
}



h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  font-family: inherit;
  color: currentColor;
  text-decoration: none;
}

button {
  display: block;
  padding: 0;

  font-family: inherit;
  cursor: pointer;
  border: none;
  outline: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

textarea {
  resize: none;
}`;
