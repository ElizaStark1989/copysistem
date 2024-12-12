import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/navbar.css"
import { useDispatch, useSelector } from "react-redux";
import ModalLogin from "./ModalLogin";
import { logout } from "../store/states/auth.slice";


const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
        alert("has cerrado seccion.");
    };

  const handleLoginOpen = () => setIsLoginOpen(true);
  const handleLoginClose = () => setIsLoginOpen(false);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-logo">
                <h1> CP </h1>
            </div>
            <ul className="navbar-links">
                <li><Link to ="/"> INICIO </Link></li>
                <li><Link to ="/QuienesSomos">  Quienes somos </Link></li>
                <li><Link to ="/Catalogo">  Catalogo </Link></li>
                <li><Link to ="/Servicios">  Servicios </Link></li>
                <li><Link to ="/FAQ"> FAQ </Link></li>
                <li><Link to ="/Register">  Registrate </Link></li>
                {isLoggedIn && (
                <li><Link to ="/CarritoDeCompras">  Carrito de compras </Link></li>
                )}
                {isLoggedIn ? (
                    <li>
                        <button onClick={handleLogout} className="logout-button"> Cerrar seccion </button>
                    </li>
                ) : (
                    <li><button onClick={handleLoginOpen} className="login-button">Iniciar Sesion</button></li>
                )}
            </ul>
        </nav>
        <ModalLogin isOpen={isLoginOpen} onClose={handleLoginClose}/>
    </>
    );
};

export default Navbar;