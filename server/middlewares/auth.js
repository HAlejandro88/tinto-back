//////////////////////////////////////////
///// Verificar token
/////////////////////////////////////////

const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    let token = req.get('Authorization');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(500).json({
                err
            })
        }

        req.user =decoded
        next();
    })
}


module.exports = {verificarToken};