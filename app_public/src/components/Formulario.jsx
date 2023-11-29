import React from "react";
import { Link } from "react-router-dom";
const Formulario = () => {
    return ( 
        <main className="flex-shrink-0">
            <div className="container">
                {/* <h1 className="mt-5">Mi primer Proyecto MERN v1</h1>
                <hr style={{background: 'black'}} /> 
                <h1 className="text-center">Listado de usuarios</h1> */}
                <table className="table table-hover table-dark table-responsive bg-secondary table-striped">
                    <caption></caption>
                    <thead className="thead-dark fixed">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Carrera </th>
                            <th scope="col">Operaciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Oscar</td>
                            <td>De La Renta</td>
                            <td>Santo Domingo - RD</td>
                            <td>Diseño de Modas</td>
                            <td> 
                                <button className="btn btn-outline-light space text-warning" type="button" data-toggle="modal">
                                    <Link to='/update'>
                                        <em className="fas fa-edit text-warning"> </em>
                                    </Link>
                                </button>
                                <span> </span>
                                <button className="btn btn-outline-light space text-danger"  type="button" data-toggle="modal"> 
                                    <Link to='/delete'>
                                        <em className="far fa-trash-alt text-danger"></em>
                                    </Link>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Clark</td>
                            <td>Kent</td>
                            <td>Wisconsin - USA</td>
                            <td>Periodismo</td>
                            <td> 
                                <button className="btn btn-outline-light space text-warning" type="button" data-toggle="modal">
                                    <Link to='/update'>
                                        <em className="fas fa-edit text-warning"> </em>
                                    </Link>
                                </button>
                                <span> </span>
                                <button className="btn btn-outline-light space text-danger"  type="button" data-toggle="modal"> 
                                    <Link to='/delete'>
                                        <em className="far fa-trash-alt text-danger"></em>
                                    </Link>
                                </button>
                            </td>                  
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Tony</td>
                            <td>Stark</td>
                            <td>Quito - Ecuador</td>
                            <td>Diseño MI</td>
                            <td> 
                                <button className="btn btn-outline-light space text-warning" type="button" data-toggle="modal">
                                    <Link to='/update'>
                                        <em className="fas fa-edit text-warning"> </em>
                                    </Link>
                                </button>
                                <span> </span>
                                <button className="btn btn-outline-light space text-danger"  type="button" data-toggle="modal"> 
                                    <Link to='/delete'>
                                        <em className="far fa-trash-alt text-danger"></em>
                                    </Link>
                                </button>
                            </td>                   
                        </tr>
                    </tbody>
                </table>
                <hr style={{background: 'black'}} /> 
            </div>
        </main>
    );
}

export default Formulario;