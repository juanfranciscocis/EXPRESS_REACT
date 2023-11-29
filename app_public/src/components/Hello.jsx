// componente con notación react hooks - snipet rsf o sfc
import React from 'react';
import { Link } from "react-router-dom";

export const Hello = (props) => {
    let { nombre, apellido } = props;  // desestructurar el objeto props
    console.log(props);
    return (  
        <div>
            <h1>Hello World... { nombre } { apellido }  </h1>
            <button className="btn btn-outline-light space text-success"  type="button" data-toggle="modal"> 
                <Link to='/'>
                    <em className="fas fa-sign-out-alt  text-success"> Regresar</em>
                </Link>
            </button>
        </div>
    );
}

export const Saludo = ({ nombre, apellido }) => {
    return (  
        <div>
            <h1>Mucho Gusto { nombre } { apellido }  </h1>
            <button className="btn btn-outline-light space text-success"  type="button" data-toggle="modal"> 
                <Link to='/'>
                    <em className="fas fa-sign-out-alt  text-success"> Regresar</em>
                </Link>
            </button>
        </div>
    );
}

export const HolaMundo = () => {
    return ( 
        <div className="row g-3">
        <div className="col-md-2"></div>
        <div className="col-md-8">
            <h1 className="text-center">Creación de Usuarios</h1>
            <div className="card">
                <div className="card-body">
                    <form action="" method="" className="row g-3">
                        <div className="col-md-6">
                            <label  className="form-label">Nombre</label>
                            <input className="form-control" id="nombre" type="text" name="nombre" placeholder="Ingrese el nombre del usuario" />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Apellido</label>
                            <input className="form-control" id="apellido" type="text" name="apellido" placeholder="Ingrese el apellido del usuario" />
                        </div>

                        <div className="col-12">
                            <label  className="form-label">Dirección</label>
                            <input className="form-control" id="direccion" type="text" name="direccion" placeholder="Ingrese la dirección del usuario" />
                        </div>

                        <div className="col-md-4">
                            <label  className="form-label">Identificación</label>
                            <input className="form-control" id="identificacion" type="number" name="identificacion" placeholder="Ingrese la identificación del usuario" />
                        </div>
                        <div className="col-md-4">
                            <label  className="form-label">Edad</label>
                            <input className="form-control" id="edad" type="number" name="edad" placeholder="Ingrese la edad del usuario" />
                        </div>
                        <div className="col-md-4">
                            <label  className="form-label">Teléfono</label>
                            <input className="form-control" id="telefono" type="number" name="telefono" placeholder="Ingrese el teléfono del usuario" />
                        </div>

                        <div className="col-md-6">
                            <div className="col-md-12 mb-3">
                                <label  className="form-label">Tipo de Materia</label>
                                <select id="tipo" className="form-select" name="tipo">
                                    <option selected>Seleccione el tipo de materia</option>
                                    <option value="Presencial">Presencial</option>
                                    <option value="Virtual">Virtual</option>                      
                                </select>
                            </div>

                            <div className="col-md-12 mb-3">
                                <label  className="form-label">Carrera</label>
                                <input className="form-control" id="carrera" type="text" name="carrera" placeholder="Ingrese el nombre de la carrera" />
                            </div>

                            <div className="col-md-12 mb-3">
                                <label  className="form-label">Fecha de Creación</label>
                                <input className="form-control" id="fecha" type="date" name="creado" placeholder="Fecha Actual" />
                            </div>
                        </div>

                        <div className="col-md-6 d-flex mb-3">
                            <label className="col-md-3 col-form-label">Materias</label>
                            <select id="materias" className="form-select" name="nombres" multiple aria-label="multiple select materias">
                                <option selected>Seleccione las materias</option>
                                <option value="Desarrollo web 1">Desarrollo web 1</option>
                                <option value="Desarrollo web 2">Desarrollo web 2</option>
                                <option value="Desarrollo web 3">Desarrollo web 3</option>
                                <option value="Fotografía 1">Fotografía 1</option>
                                <option value="Fotografía 2">Fotografía 2</option>
                                <option value="Fotografía 3">Fotografía 3</option>
                                <option value="Periodismo 1">Periodismo 1</option>
                                <option value="Periodismo 2">Periodismo 2</option>
                                <option value="Periodismo 3">Periodismo 3</option>
                            </select>
                        </div>
                    </form>
                    <button className="btn btn-outline-primary" type="submit">Crear Usuario</button>
                </div>
            </div>
        </div>
    </div>
    );
}
