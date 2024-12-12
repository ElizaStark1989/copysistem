import React, { useState } from 'react';
import "../pages/servicios.css"
import FormularioInfo from './FormularioInfo';



const ServiciosPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleMoreInformation = (serviceType) => {
    setSelectedService({ name: serviceType });
  };

  const handleCloseForm = () => {
    setSelectedService(null);
  };


  return (
    <div className='servicios-section'>
      <div className='servicios-title'>
        <h2>Impresionando con soluciones a tu medida</h2>
      </div>
      <div className='servicios-container'>
      <div className='servicio-card'>
        <img src='/images/Reparacion.jpg' alt='Reparacion' className='servicio-image'/>
        <h2>Reparación</h2>
        <p>Soluciones rápidas y confiables para tus equipos dañados.</p>
        <button onClick={() => handleMoreInformation("Reparacion")}>Mas informacion</button>
      </div>
      <div className='servicio-card'>
        <img src='/images/mantenimiento.jpg' alt='Mantenimiento' className='servicio-image'/>
        <h2>Mantenimiento</h2>
        <p>Extiende la vida útil de tus equipos con nuestro mantenimiento preventivo.</p>
        <button onClick={() => handleMoreInformation('Mantenimiento')}>Mas informacion</button>
      </div>
      </div>
      { selectedService && (
        <FormularioInfo producto={selectedService} onClose={handleCloseForm} />
      )}
    </div>
  )
}

export default ServiciosPage