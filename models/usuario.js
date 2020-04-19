const mongoose = require('mongoose');

const usuarioModel = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'se necesita un email para iniciar'],
        unique: true
    },
    nombre: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: [true, 'se necesita una contraseña']
    },
    role: {
        type: String,
        required: [true, 'se neseciata un role para ingresar'],
        default: 'EMPLEADO_ROLE'
    },
    creado: {
        type: Date,
        default: Date.now()
    }
})

usuarioModel.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

module.exports = mongoose.model('usuarios',usuarioModel);