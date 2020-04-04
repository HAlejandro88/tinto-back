const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      ticketsroutes = require('../routes/tickets'),
      app = express(),
      cors = require('cors');


// conectar la base de datos

mongoose.connect("mongodb://localhost:27017/tintoreria", {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).then(() => {
    console.log('base de Datos: \x1b[32m%s\x1b[0m', 'online');
}).catch((error) => console.log(error));


//Middlewares
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//rutas
app.use('/ticket',ticketsroutes); 

app.get('/', (req,res) => {
    res.status(200).json({
        ok: true,
        menssage: 'bienvenido a el back de tinto'
    })
})


app.listen(3000, () => console.log('esta vivo'));