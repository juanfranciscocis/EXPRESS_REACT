// controllers
                 
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

// users - GET
const users = (req, res, next)=> {
    res.render('users', { title: 'Listado de Usuarios', usuarios });
  }

module.exports = {
  users // users - GET
  
}