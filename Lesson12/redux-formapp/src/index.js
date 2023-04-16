import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/App';

const container = document.getElementById('root');
const root = createRoot(container);

//Provider; store un, Provider içindeki tüm componentlere erişim sağlar.
//Store; bir state deposudur.
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
