import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Global, theme } from './shared/Styles';
import {ThemeProvider} from "styled-components";


ReactDOM.render(
   <ThemeProvider theme={theme}>
      <Global />
      <ThemeProvider theme={theme}>
         <App />
      </ThemeProvider>
   </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
