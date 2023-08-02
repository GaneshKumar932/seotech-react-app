import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/bootstrap.css';
import '../src/css/style.css';
import '../src/css/responsive.css';
import 'bootstrap';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
    <script type="text/javascript" src="../src/js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="../src/js/bootstrap.js"></script>
  <script type="text/javascript" src="../src/js/custom.js"></script>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

