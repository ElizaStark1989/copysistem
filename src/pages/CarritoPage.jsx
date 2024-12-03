import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../pages/carrito.css";
import { removeFromCart } from '../store/states/cart.slice';


const CarritoPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='carrito-container'>
      <h1> Carrito de compras </h1>
      {cart.length === 0 ? (
        <p>No tienes productos en tu carrito</p>
      ) : (
        <div>
          {cart.map((item) => (
          <div key={item.id} className='carrito-item'>
            <img src={item.image} alt={item.name} className='carrito-item-image' />
            <div>
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unidad: ${item.price.toFixed(2)}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => handleRemoveFromCart(item.id)} className='carrito-remove-button'>Eliminar</button>
            </div>
          </div>
          ))}
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <button className='carrito-pago-button'>Procede al pago</button>
        </div>
      )}
    </div>
  );
};

export default CarritoPage;