import React from 'react';
import "../pages/modalLogin.css";

const ModalLogin = ({ isOpen, onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        alert(`Inicio de sesion exitoso para ${email}`);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <button className='close-button' onClick={onClose}>X</button>
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Correo Electronico</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            required
                            placeholder='Ingresa tu correo'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Contraseña</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            required
                            placeholder='Ingresa tu contraseña'
                        />
                    </div>
                    <button type='submit' className='login-button'>Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

export default ModalLogin;