import axios from 'axios'
import api from '../../BackEnd/api.js'
import { useState } from 'react'
import Swal from 'sweetalert2'

function RegistrarUsuario() {

    // ---> Estados de los Inputs
    const [Nombre, setNombre] = useState('')
    const [Email, setEmail] = useState('')
    const [Contraseña, setContraseña] = useState('')
    const [Contraseña2, setContraseña2] = useState('')

    // ---> Estado para los Mensajes
    const [Mensaje, setMensaje] = useState('')

    const hendleSubmit = async (e) => {
        e.preventDefault()
        setMensaje('')

        if (Contraseña !== Contraseña2) {
            Swal.fire({
                title: "Error en Las Contraseñas",
                text: 'Las Contraseñas no Coinciden',
                icon: "error",
                draggable: true
            });
            return
        }

        try {
            const servidor = await api.post('/registrousuario', {
                Nombre,
                Email,
                Contraseña
            })
             Swal.fire({
                title: "Usuario Registrado con Exito ✅",
                text: 'Revise su Email para finalizar con el Proceso de Registro',
                icon: "success",
                draggable: true
            });


            setContraseña('')
            setContraseña2('')
            setEmail('')
            setNombre('')
        }

        catch (Error) {
            setMensaje(servidor.data.message || 'Usuario ya Registrado')
        }
    }

    return (
        <>
            <div className="registrar-container">
                <div className="registrar-card">
                    {/* Header */}
                    <div className="registrar-header">
                        <div className="registrar-icon-circle">
                            <span>👤</span>
                        </div>
                        <h1 className="registrar-title">Crear Cuenta</h1>
                        <p className="registrar-subtitle">Únete a nuestra comunidad hoy mismo</p>
                    </div>


                    <form className="registrar-form" onSubmit={hendleSubmit}>
                        {/* Nombre */}
                        <div className="registrar-form-group">
                            <label htmlFor="Nombre" className="registrar-label">
                                <span className="registrar-label-icon">👤</span>
                                Nombre Completo
                            </label>
                            <input
                                type="text"
                                id="Nombre"
                                name="Nombre"
                                placeholder="Juan Pérez"
                                className="registrar-input"
                                required
                                value={Nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>

                        {/* Email */}
                        <div className="registrar-form-group">
                            <label htmlFor="Email" className="registrar-label">
                                <span className="registrar-label-icon">✉️</span>
                                Correo Electrónico
                            </label>
                            <input
                                type="Email"
                                id="Email"
                                name="Email"
                                placeholder="tu@ejemplo.com"
                                className="registrar-input"
                                value={Email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Contraseña */}
                        <div className="registrar-form-group">
                            <label htmlFor="Contraseña" className="registrar-label">
                                <span className="registrar-label-icon">🔒</span>
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="Contraseña"
                                name="Contraseña"
                                placeholder="••••••••"
                                className="registrar-input"
                                value={Contraseña}
                                required
                                onChange={(e) => setContraseña(e.target.value)}
                            />
                        </div>

                        {/* Repetir Contraseña */}
                        <div className="registrar-form-group">
                            <label htmlFor="Contraseña2" className="registrar-label">
                                <span className="registrar-label-icon">🔒</span>
                                Repetir Contraseña
                            </label>
                            <input
                                type="password"
                                id="Contraseña2"
                                name="Contraseña2"
                                placeholder="••••••••"
                                className="registrar-input"
                                value={Contraseña2}
                                required
                                onChange={(e) => setContraseña2(e.target.value)}
                            />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="registrar-button">
                            Registrar Usuario
                        </button>

                        {/* Login Link */}
                        <p className="registrar-login-link">
                            ¿Ya tienes cuenta?{" "}
                            <a href="#" className="registrar-link">
                                Inicia sesión
                            </a>
                        </p>
                    </form>
                    {Mensaje && <p className='Mensajes'>{Mensaje}</p>}
                </div>
            </div>
        </>
    )
}

export default RegistrarUsuario