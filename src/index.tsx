import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { configure } from 'axios-hooks';

import './index.css';
import App from './App';
import appTheme from 'common/theme';
import axiosClient from 'common/api';
import VoteContextProvider from 'context/VoteContext';
import { GameContextProvider } from 'context';

// import 'react-awesome-slider/dist/styles.css';

configure({ axios: axiosClient });

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <VoteContextProvider>
          <GameContextProvider>
            <App />
          </GameContextProvider>
        </VoteContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
