const express = require('express');
const router = express.Router();

// controllers
const ctrlUsers = require('../controllers/users');

/* GET users listing. */
router.get('/', ctrlUsers.users);

// Creación de Usuarios
router
    .route('/add')
    .get(ctrlUsers.renderUsersCreate)       // mostrar formulario
    .post(ctrlUsers.doUsersCreate);         // crear usuario

// Eliminación de Usuarios
router
    .route('/delete/:userid')
    .get(ctrlUsers.deleteUsers)       // mostrar formulario
    .post(ctrlUsers.doUsersDelete);   // eliminar usuario

module.exports = router;
