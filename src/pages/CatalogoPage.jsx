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
      <div className='catalogo-title'>
        <h1>Catálogo de Impresoras</h1>
        <p>Tu próxima impresión comienza aquí</p>
      </div>
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