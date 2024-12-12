import React, { useState } from 'react';
import "../pages/register.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ... formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const respose = await axios.post("http://127.0.0.1:5000/api/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      alert(`Registro exitoso: ${respose.data.mensaje}`);
      navigate("/");

    } catch (error) {
      if (error.respose && error.respose.data) {
        alert(`Error: ${error.response.data.error}`);
      } else {
        alert("Error en el servidor. Por favor, intentelo mas tarde");
      }
    }
  };
  return (
    <div className='register-page'>
      <div className='register-container'>
        <h1>Registro</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Nombre</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Correo electronico</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
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
            />
          </div>
          <div className='form-group'>
            <label htmlFor='confirmPassword'>Confirmar contraseña</label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type='submit' className='register-button'> Registrar </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;