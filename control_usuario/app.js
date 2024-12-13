const express = require('express');
const app = express();

const usuarios = [
    {id: 1, nombre: 'Juan', apellido: 'Perez', email: 'juanperez@gmail.com'},
    {id: 2, nombre: 'Maria', apellido: 'Perez', email: 'mariaerez@gmail.com'},
];


app.get('/usuarios', (req,res) => {
    res.send({usuarios});
});

app.get('/usuarios/:id', (req, res) => {
    console.log(req.params);
    const {id} = req.params;
    const usuario = usuarios.find(u => u.id == id)
    res.send(usuario);
});

app.put('/usuarios',(req, res) => {
    res.send('Usuario modificado');
});

app.patch('/usuarios',(req, res) => {
    res.send('Usuario modificado');
});

app.delete('/usuarios',(req, res) => {
    res.send('Usuario eliminado');
});

app.post('/usuarios',(req, res)=> {
    const {nombre, apellido, email} = req.body;

    if (!nombre || !apellido || !email){
        req.status(400).send('Todos los campos son obligatorios!');
        return;
    }

    if (usuarios.find((usuario) => ususario.email === email)){
        res.status(400).send('Ya existe un usuario con esta direccion');
    }

    usuarios.push({
        id: usuarios.length + 1,
        nombre,
        apellido,
        email
    });

    res.send('Usuario creado');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
