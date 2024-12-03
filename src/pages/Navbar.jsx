import React from "react";
import { Link } from "react-router-dom";
import "../pages/navbar.css"
import { useDispatch, useSelector } from "react-redux";


const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logaut());
        alert("has cerrado seccion.");
    };

    return (
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
                    <li><Link to="/Login">Iniciar seccion</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;