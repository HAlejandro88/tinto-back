
const expect = require('chai').expect;
const request = require('supertest');
const usuario = require('../../../routes/usuario');
const conect = require('../../api/conect/conect');


describe('POST, usuarios', () => {
    before((done) => {
        conect.conecct().then(() => done())
        .catch((err) => done(err));
    })


    it('si es ok crea un nuevo usuario', (done) => {
        request(usuario).post('/crear')
            .send({email: 'prueba12@gmail.com',
                   password: '12345678', 
                   nombre: 'prueba', 
                   role: 'EMPLEADO_ROLE'
                })
            .then((res) =>  {
                const body = res.body;
                //console.log(body);
                expect(body).to.contain.property('ok');
                expect(body).to.contain.property('usuarioBD');
                done();
            })
    });
});


describe('GET, trae todos los usuarios', () => {
    before((done) => {
        conect.conecct().then(() => done())
        .catch((err) => done(err));
    })

    it('si es OK te develve los resultados', (done) => {
        request(usuario).get('/')
            .then((res) => {
                const body = res.body;
                expect(body.usuarios.lenght).to.not.equal(0);
                done();
            })
    });
})


