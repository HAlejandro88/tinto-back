const express =  require('express'),
      Tickets = require('../models/tickets'),
      {verificarToken} = require('../server/middlewares/auth'),
      app = express();


app.get('/', (req,res) => {
    Tickets.find()
                .populate('usuario', 'nombre')
                .exec((err, tickestBD) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'error al taraer el ticket',
                err
            })
        }

        res.status(200).json({
            ok: true,
            tickestBD: tickestBD
        })
    })
})


app.post('/crear',[verificarToken],(req,res) => {
    let body = req.body;

    let newticket = {
        nombre: body.nombre,
        pantalon: body.pantalon,
        camisa: body.camisa,
        traje: body.traje,
        usuario: body.usuario
    }

    Tickets.create(newticket,(err, ticketGuardado) =>{
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'error al taraer el ticket',
                err
            })
        }

        res.status(201).json({
            ok: true,
            ticketGuardado: ticketGuardado
        })
    })
})

module.exports = app;