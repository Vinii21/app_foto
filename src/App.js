import React, {useState} from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './componentes/home';
import PanelAdministrador from './componetesAdmin/PanelAdministrador';
import Redirigir from './componentes/Redirigir';
import PaginaSecciones from './componentes/PaginaSecciones';

function App() {

  const [activeTab, setActiveTab] = useState("1");
  
  return (
      <Routes>
        <Route path="/" element={<Home setActiveTab={setActiveTab}/>}/>
        <Route path="/sesiones" element={<PaginaSecciones activeTab={activeTab} setActiveTab={setActiveTab}/>}/>
        <Route path="/admin" element={<PanelAdministrador />}/>
        <Route path="*" element={<Redirigir />} />
      </Routes>
  );
}

export default App;
