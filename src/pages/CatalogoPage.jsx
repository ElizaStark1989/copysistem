import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../pages/catalogo.css"
import { addToCart } from '../store/states/cart.slice';


const CatalogoPage = () => {
  const printers = useSelector((state) => state.printers);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    alert(`${product.name} se ha añadido al carrito.`);
    dispatch(addToCart(product));
  };

  return (
    <div className='catalogo-container'>
      <h1>Catalogo de Impresoras</h1>
      <div className='catalogo-grid'>
        {printers.map((printer) => (
          <div className='catalogo-card' key={printer.id}>
            <img
              src={printer.image}
              alt={printer.name}
            />
            <h3> {printer.name} </h3>
            <p>{printer.description}</p>
            <p><strong>Precio: </strong> ${printer.price}</p>
            <button
              onClick={() => handleAddToCart(printer)}
              className='catalogo-button'
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

      export default CatalogoPage;