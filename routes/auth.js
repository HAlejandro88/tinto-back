const express = require('express'),
      {verificarToken} = require('../server/middlewares/auth'),
      app = express();


app.get('/', [verificarToken], (req,res) => {
    return res.status(200).json({
        ok: true,
        user: req.user
    })
})


module.exports = app;