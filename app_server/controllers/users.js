// controllers
const request = require('request');
// definir los URLs para los ambientes de desarrollo y producción
const apiOptions = {
    server: 'http://localhost:3000' // server local - desarrollo
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://dw3-202310-1f0296649057.herokuapp.com/' // server heroku - producción
}

let usuarios = [
    {
        nombre: 'Martín',
        apellido: 'Mafla',
        direccion: 'Quito'
    },
    {
        nombre: 'Mateo',
        apellido: 'Bonilla',
        direccion: 'Cumbayá'
    },
    {
        nombre: 'Fernanda',
        apellido: 'Quintero',
        direccion: 'Tumbaco'
    }
];

// listar users - GET
const users = (req, res, body)=> {
    const path = '/api/users/';
    const requestOptions = { // objeto cargado con las opciones para request
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    console.log(requestOptions);
    request(
        requestOptions, 
        (err, response, body)=>{
            if (err) {
                console.log('Error al listar usuarios: ', err);
            } else if (response.statusCode === 200) {
                renderUsers(req, res, body);
                console.log('Objeto resultante: ', body);
            } else {
                console.log('Status: ', response.statusCode);
                res.render('error', {
                    mensaje: 'Existe un error en la colección de usuarios'
                })
            }
        });
}

// Render de la vista users
const renderUsers = (req, res, responseBody)=> {
    res.render('users', { title: 'Listado de Usuarios', usuarios: responseBody });
}

// creación de usuarios
// render la vista users_create
const renderUsersCreate = (req, res)=>{
    res.render('users_create',{ 
        title: 'Creación de Usuarios',
        mensaje: 'Bienvenido a Creación de Usuarios'
    });
}

// crear documento de usuario
const doUsersCreate = (req, res)=>{
    const path = '/api/users/';
    const postdata = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        identificacion: req.body.identificacion,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        edad: req.body.edad,
        tipo: req.body.tipo,
        nombres: req.body.nombres,
        carrera: req.body.carrera,
        fecha: req.body.creado
    };
    const requestOptions = { // objeto cargado con las opciones para request
        url: `${apiOptions.server}${path}`,
        method: 'POST',
        json: postdata
    };
    console.log(requestOptions);

    request(
        requestOptions, 
        (err, response, body)=>{
            if (response.statusCode === 201) { // creación exitosa
                res.render('users_create', {
                    title: 'Creación de Usuarios',
                    mensaje: 'Usuario Creado Exitosamente'
                })
            } else {
                console.log('status code: ', response.statusCode);
                console.log('error: ', err);
                res.render('error', {mensaje: 'Existe un error en la colección de usuarios'})
            }
        });
}

// Eliminar Usuario
// 0. render vista users_delete
const renderUsersDelete = (req, res, responseBody)=> {
    res.render('users_delete', { 
        title: 'Eliminación de Usuarios', 
        nombre: responseBody.nombre, 
        apellido: responseBody.apellido,
        identificacion: responseBody.identificacion,
        direccion: responseBody.direccion,
        telefono: responseBody.telefono,
        edad: responseBody.edad,
        tipo: responseBody.tipo,
        nombres: responseBody.nombres,
        carrera: responseBody.carrera,
        fecha: responseBody.creado,
        documento: responseBody._id
    });
}

// 1. buscar el documento y mostrarlo en el formulario
const deleteUsers = (req, res, body)=> {
    const path = `/api/users/${req.params.userid}`;
    const requestOptions = { // objeto cargado con las opciones para request
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    console.log(requestOptions);
    request(
        requestOptions, 
        (err, response, body)=>{
            if (err) {
                console.log('Error al buscar usuarios: ', err);
            } else if (response.statusCode === 200) {
                renderUsersDelete(req, res, body);
                console.log('Objeto resultante: ', body);
            } else {
                console.log('Status: ', response.statusCode);
                res.render('error', {
                    mensaje: 'Existe un error en la colección de usuarios'
                })
            }
        });
}

// 2. eliminar el documento
const doUsersDelete = (req, res)=>{
    const path = `/api/users/${req.params.userid}`;
    const requestOptions = { // objeto cargado con las opciones para request
        url: `${apiOptions.server}${path}`,
        method: 'DELETE',
        json: {}
    };
    console.log('Request Options: ', requestOptions);

    request(
        requestOptions, 
        (err, response, body)=>{
            if (response.statusCode === 204) { // eliminación exitosa
                console.log('Objeto resultante: ', body);
                return res.redirect('/');
            } else {
                console.log('status code: ', response.statusCode);
                console.log('error: ', err);
                res.render('error', {mensaje: 'Existe un error en la colección de usuarios'})
            }
        });
}


module.exports = {
    users, // users - GET
    // creación de usuarios
    renderUsersCreate,  // 1. render de la vista users_create
    doUsersCreate,      // 2. creación del documento
    // eliminación de usuarios
    deleteUsers,    // 1. buscar el documento y mostrarlo en el formulario
    doUsersDelete,  // 2. eliminar el documento
}