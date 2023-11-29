// componente con notación react hooks - snipet rsf o sfc
import React from 'react';
import { Link, useParams } from "react-router-dom";

export const Delete = (props) => {
    let { nombre, apellido } = props;  // desestructurar el objeto props
    console.log(props);
    return (  
        <div>
            <h1> { nombre } </h1>
            <h2> 
                { apellido }  { useParams().userid }                
            </h2>
            <button className="btn btn-outline-light space text-success"  type="button" data-toggle="modal"> 
                <Link to='/'>
                    <em className="fas fa-sign-out-alt  text-success"> Regresar</em>
                </Link>
            </button>
        </div>
    );
}