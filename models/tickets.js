const mongoose = require('mongoose');

const ticketsModel = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'se requiere el nombre del cliente']
    },
    pantalon: {
        type:  Boolean,
        required: false,
        default: false
    },
    camisa: {
        type: Boolean,
        required: false,
        default: false
    },
    traje: {
        type: Boolean,
        required: false,
        default: false
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios',
        required: true
    }
})


module.exports = mongoose.model('tickets',ticketsModel);