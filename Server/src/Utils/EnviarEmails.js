const nodemailer = require('nodemailer')
require('dotenv').config();

// ---> Configuración del servicio de correo
const DatosEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

// ---> Función para enviar correo de verificación
async function EnviarCorreo(Nombre,Email,TokenEmail) {
    // ---> Configuración del correo
    const hipervinculo_validacion= `http://localhost:3000/api/verificacion/${TokenEmail}`;
    // ---> Opciones del correo
    const opciones={
        from: process.env.EMAIL_USER,
        to:Email,
        subject: "Confirmar Tu Cuenta Creada 😊",
        // ---> Cuerpo del correo
        html:
        `
            <h1>Hola ,${Nombre} </h1>
            <p>Gracias por Registrarte, Por favor verifica tu cuenta mediante el link </p>
            <a href="${hipervinculo_validacion}">Click Aquí ✔</a>
        `
    };
    // ---> Enviar el correo
    await DatosEmail.sendMail(opciones)
}

module.exports={EnviarCorreo}