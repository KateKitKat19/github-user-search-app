import { createGlobalStyle } from 'styled-components';

import 'modern-normalize'; /* bring in normalize.css styles */

export const GlobalStyle = createGlobalStyle`
:root { 
  //colors
  --light-mode-blue: #0079FF;
  --light-mode-greyish: #697C9A;
  --light-mode-dark-blue: #4B6A9B;
  --light-mode-dark: #2B3442;
  --light-mode-lightgrey: #F6F8FF;
  --light-mode-white: #FEFEFE;
  --light-mode-title-color: #222731;
  --dark-mode-blue: #0079FF;
  --dark-mode-white: #FFFFFF;
  --dark-mode-dark: #141D2F;
  --dark-mode-main-blue: #1E2A47;

  //typography
  --main-font-style: 'Space Mono';
  --regular-font-size: 15px;
}

body {
  width: 100%;
  margin: 0;
  font-family: var(--main-font-style),
    sans-serif;
    font-size: var(--regular-font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`;

