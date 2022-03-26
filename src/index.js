import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Root from './Root/Index';
import Context from './context';


ReactDOM.render(
  <React.StrictMode>
    <Context>
    <Root />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

