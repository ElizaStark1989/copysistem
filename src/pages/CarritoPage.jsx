import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../pages/carrito.css";
import { removeFromCart } from '../store/states/cart.slice';
import FormularioInfo from './FormularioInfo';



const CarritoPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleMoreInformation = (producto) => {
    setSelectedProduct(producto);
  };

  const handleCloseForm = () => {
    setSelectedProduct(null);
  };

  return (
    <div className='carrito-container'>
      <div className='carrito-title'>
      <h1> Carrito de compras </h1>
      </div>
      {cart.length === 0 ? (
        <p>No tienes productos en tu carrito</p>
      ) : (
        <div className='carrito-grid'>
          {cart.map((item) => (
            <div key={item.id} className='carrito-card'>
              <img src={item.image} alt={item.name} className='carrito-item-image' />
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unidad: ${item.price.toFixed(2)}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <div className='carrito-buttons'>
                <button onClick={() => handleRemoveFromCart(item.id)} className='carrito-remove-button'>Eliminar</button>
                <button onClick={() => handleMoreInformation(item)} className='carrito-info-button' >Mas Informacion</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedProduct && (
        <FormularioInfo producto={selectedProduct} onClose={handleCloseForm}/>
      )}
    </div>

  );
};

export default CarritoPage;