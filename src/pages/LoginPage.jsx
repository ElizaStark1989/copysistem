import React, { useState } from 'react';
import axios from 'axios';
import ForgotPassword from './ForgotPassword';

const LoginPage = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showForgotPassword, setShowForgotPassword] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      alert("Por favor, completa todos los campos");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/login", {
        email: formData.email,
        password: formData.password,
      });

      alert(`inicio de sesion exitoso para ${response.data.mensaje}`);
      console.log("Token recibido:", response.data.token);
      onClose();
    } catch (error) {

      if (error.response && error.response.data) {
        alert(`Error: ${error.response.data.error}`);
      } else {
        alert("Error en el servidor. [Por favor, intentalo mas tarde.");
      }
    }
  };

  return (
    <div className="login-modal">
      {showForgotPassword ? (
        <ForgotPassword onCLose={() => setShowForgotPassword(false)} />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Correo Electrónico</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              required
              placeholder='Ingresa tu contraseña'
            />
          </div>
          <button type='submit' className='login-button'>Iniciar Sesión</button>
          {/* Enlace para "¿Olvidaste tu contraseña?" */}
          <button
            type="button"
            className="forgot-password-link"
            onClick={() => setShowForgotPassword(true)}
          >
            ¿Olvidaste tu contraseña?
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;