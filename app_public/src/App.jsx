import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // para usar el sistema de ruteo
import Hola from './components/Hola';
import { Saludo } from './components/Hello';
import Formulario from './components/Formulario';
import { Delete } from './components/Delete';

const App = ()=> {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Formulario /> } /> 

        <Route path='/update' element={ <Hola /> } /> 

        <Route path='/delete' element={ <Saludo nombre='Oscar' apellido='De La Renta' /> } />

        {/* Esta es la definición de una ruta dinámica */}
        <Route 
          path='/delete/:userid' 
          // Los dos formas de asignación de props son válidas
          element={<Delete  nombre={'Borrar: '} apellido=' Oscar De La Renta '/>} 
        />
      </Routes>
    </div>
  );
}

export default App; 
