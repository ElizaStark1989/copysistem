
import "../pages/formularioInfo.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";


const FormularioInfo = ({ producto, onClose }) => {
    const location = useLocation();

    const mensajeInicial = location.state?.serviceType || producto?.name|| "";


    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: mensajeInicial
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Solicitud enviada:\nNombre: ${formData.nombre}\nCorreo: ${formData.email}\nTelefono: ${formData.telefono}\nMensaje: ${formData.mensaje}`);
        if (onClose) onClose();
    };

    return (
        <div className="formulario-overlay">
            <div className="formulario-container">
                <button className="close-button" onClick={onClose}>
                    X
                </button>
                <h2>Solicitar mas informacion</h2>
                <p><strong>Producto:</strong> {producto?.name || mensajeInicial}</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Ingresa tu nombre"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Ingresa tu email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono">Numero de contacto</label>
                        <input
                            type="telefono"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                            placeholder="Ingresa tu numero de contacto"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                            placeholder="escribe tu mensaje"
                        />
                    </div>
                    <button type="submit" className="submit-button"> Enviar </button>
                </form>
            </div>
        </div>
    );
};

export default FormularioInfo;