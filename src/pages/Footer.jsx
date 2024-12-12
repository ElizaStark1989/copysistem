import React from 'react';
import "../pages/footer.css"

const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className='footer-content'>
            <div className='contact-info'>
                <h3> Contactanos </h3>
                <p><strong>Telefono:</strong> +57 300 411 11 11</p>
                <p><strong>Email:</strong> contacto@copysistem.com</p>
                <p><strong>Direccion:</strong> calle 10 a #55- 55, Medellin Colombia</p>
            </div>
            <div className='map-container'>
                <h3>Ubicacion</h3>
                <iframe
                title='Ubicacion de la Empresa'
                src='https://www.google.com/maps/search/Medell%C3%ADn+parque+la+milagrosa/@6.2353876,-75.5580848,17z/data=!3m1!4b1?hl=es&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D'
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen="lazy"
                ></iframe>
            </div>
    </div>
    <div className='footer-bottom'>
        <p>&copy; 2024 Copysistem. Todos los derechos reservados.</p>
    </div>
    </footer>
  );
};

export default Footer;