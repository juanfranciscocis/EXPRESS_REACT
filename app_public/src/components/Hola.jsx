// Componente usando la sintaxis de class - usar el snippet rcc

import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Hola extends Component {
    render() {
        return (
            <div>
                <h1 className='display-1'>Hola Mundo...</h1>
                <div>
                    <button className="btn btn-outline space text-success"  type="button" data-toggle="modal"> 
                        <Link to='/'>
                            <em className="fas fa-sign-out-alt  text-success"> Regresar</em>
                        </Link>
                    </button>
                </div>
            </div>

        );
    }
}

export default Hola;