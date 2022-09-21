import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './componentes/home';
import PanelAdministrador from './componetesAdmin/PanelAdministrador';
import Redirigir from './componentes/Redirigir';
import PaginaSecciones from './componentes/PaginaSecciones';

function App() {
  
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sesiones" element={<PaginaSecciones />}/>
        <Route path="/admin" element={<PanelAdministrador />}/>
        <Route path="*" element={<Redirigir />} />
      </Routes>
  );
}

export default App;
