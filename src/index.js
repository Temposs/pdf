import React from 'react';
import ReactDOM from 'react-dom/client';
import './view/App.css';
import './view/index.css';
import {App} from './view/App.js';

const root = ReactDOM.hydrateRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);