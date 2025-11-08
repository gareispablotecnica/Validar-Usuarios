const Express = require('express')
const Rutas = Express.Router()

const { RegistrarNuevoUsuario } = require('../Controller/Registro.controller')
const { VerificacionToken } = require('../Utils/Token')

const db = require('../DataBase/db')

Rutas.post('/registrousuario', RegistrarNuevoUsuario)

Rutas.get('/verificacion/:Token', (req, res) => {
    const { Token } = req.params;
    console.log(req.params)
    try {
        const decoded = VerificacionToken(Token)
        query = 'UPDATE Usuarios SET Verificacion=1, TokenEmail=NULL WHERE Email=?';
        db.run(query, [decoded.Email], (Error) => {
            if (Error) {
                console.error('⛔ Error en la Verificación del Usuario')
                return res.status(500).send("Error al Verificar el Usuario")
            }
            res.send("<h1>Cuenta Verificada Correctamente ✅ </h1>")
        })
    }
    catch (Error) {

    }
})

module.exports = Rutas;