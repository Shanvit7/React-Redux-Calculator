import React from 'react';
import ReactDOM from 'react-dom/client';
import {Calculator} from './Calculator';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Calculator />
    </React.StrictMode>
  </Provider>
);

