import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #51504F;
    color: #c0bfbf;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
    line-height: 1.5;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
}
input {
  font-family: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
`;
