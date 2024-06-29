// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import Carrito from './Carrito';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Basic />,
    children: [
      {
        path: "/carrito",
        element: <Carrito/>,
    },
  ],

},
]);