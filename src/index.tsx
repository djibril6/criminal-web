import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { configure } from 'axios-hooks';

import './index.css';
import App from './App';
import reportWebVitals from 'reportWebVitals';
import UserContextProvider from 'context/UserContext';
import appTheme from 'common/theme';
import axiosClient from 'common/api';
import FooterPositionContextProvider from 'context/FooterPositionContext';

// import 'react-awesome-slider/dist/styles.css';

configure({ axios: axiosClient });

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <UserContextProvider>
          <FooterPositionContextProvider>
            <App />
          </FooterPositionContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
