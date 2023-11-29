import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Hola from './components/Hola.jsx';
// import { HolaMundo, Hello,Saludo } from './components/Hello.jsx';
// import Formulario from './components/Formulario.jsx'
import { BrowserRouter } from 'react-router-dom'; // para usar el sistema de ruteo (link)

const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(
            // BrowserRouter: para usar el sistema de ruteo (link)
            <BrowserRouter> 
              <React.StrictMode>
                <App /> 
                {/* <Formulario />
                <Hola />
                <Hello nombre='MaFer' apellido='Rios' />
                <Saludo nombre='Oscar' apellido='De La Renta' />
                <HolaMundo /> */}
              </React.StrictMode>
            </BrowserRouter>
          );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
