import axios from 'axios'
import { useState } from 'react'
import api from '../Service/api.js'
import Swal from 'sweetalert2';

function RegistrarUsuario() {

    const [Nombre, setNombre] = useState('')
    const [Email, setEmail] = useState('')
    const [Contraseña, setContraseña] = useState('')
    const [Contraseña2, setContraseña2] = useState('')

    const [Mensajes, setMensajes] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMensajes('')
        if (Contraseña !== Contraseña2) {
            // ---> mensaje de exito
            Swal.fire({
                title: 'Error en Contraseña',
                text: 'Las contraseñas no coinciden',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                draggable: true
            })
            return
        }
        try {
            const response = await api.post('/registrousuario', {
                Nombre,
                Email,
                Contraseña
            })
            // ---> mensaje de exito
            Swal.fire({
                title: 'Usuario Registrado Exitosamente',
                text: response.data.message || 'Revise su email para terminar el proceso de validación.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                draggable: true
            })

            setContraseña('')
            setContraseña2('')
            setEmail('')
            setNombre('')

        } catch (error) {
            setMensajes('Error al crear el usuario')
        }
    }

    return (
        <>
            <div className="registro-container">
                <form className="registro-form" onSubmit={handleSubmit}>
                    <h2>Crear Usuario</h2>

                    <div className="input-group">
                        <label htmlFor="Nombre">Nombre:</label>
                        <input type="text" name="Nombre" id="Nombre" required
                            value={Nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="Email">Email:</label>
                        <input type="email" name="Email" id="Email" required
                            value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="Contraseña">Contraseña:</label>
                        <input type="password" name="Contraseña" id="Contraseña" required
                            value={Contraseña} onChange={(e) => setContraseña(e.target.value)} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="Contraseña2">Repetir Contraseña:</label>
                        <input type="password" name="Contraseña2" id="Contraseña2" required
                            value={Contraseña2} onChange={(e) => setContraseña2(e.target.value)} />
                    </div>

                    <button type="submit">Crear Usuario</button>
                </form>
                {Mensajes && <p className="mensajes">{Mensajes}</p>}
            </div>
        </>
    )
}

export default RegistrarUsuario