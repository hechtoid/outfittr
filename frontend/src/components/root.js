import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>
);

export default Root;