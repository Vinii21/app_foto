import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { img } from './assets/media_fichero';
import { ProveedorBaseDatos } from './contexto/ContextoBaseDatos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <ProveedorBaseDatos>
      <App />
    </ProveedorBaseDatos>
  </BrowserRouter>
  </React.StrictMode>
);

document.getElementById('root').style.backgroundImage = `url(${img[2].img})`;