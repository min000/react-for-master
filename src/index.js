import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from "styled-components";

const lightTheme = {
  textColor : "black",
  bgColor : "white"
} 
const darkTheme = {
  textColor : "white",
  bgColor : "black"
} 

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
