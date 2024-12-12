import React from "react";
import "../pages/whatsAppButton.css";



const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+573004118590?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
       <img
         src="/images/whatsapp-logo-24.png"
         alt="WhatsApp"
       />
    </a>
  )
}

export default WhatsAppButton;
