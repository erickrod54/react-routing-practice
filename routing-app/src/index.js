import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <div>
        <h1>React Router testing features</h1>
      </div>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


