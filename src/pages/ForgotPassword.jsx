import React, { useState } from "react";
import axios from "axios";
import "../pages/forgotPassword.css"


export const ForgotPassword = ({ onCLose }) => {
    const [ email, setEmail ] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:5000/api/forgot-password", {email});
            alert("Correo enviado con las instrucciones para reestablecer tu contraseña.")
            onCLose();
        } catch (error) {
            alert("No pudimos enviar el correo. Por favor, intenta mas tarde");
        }
    };

    return (
        <div className="forgot-password-container">
            <h2> Recuperar Contraseña </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email"> Correo Electronico </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                </div>
                <button type="submit" className="submit-button">
                    Enviar Correo
                </button>
                <button onClick={onCLose} className="close-button">
                    Cerrar
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
