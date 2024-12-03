import React from "react";
import "../pages/home.css"



const HomePage = () => {
  return (
    <div>
      <div className="banner-container">
        <img
          src="/images/banner4.jpg" alt="Banner de Impresoras" className="banner-image"
        />
        <div className="banner-text">
          <h1> Bienvenido a Copysistem</h1>
          <p>La mejor tecnologia para tus necesidades de impresion</p>
        </div>
      </div>
      <div className="home-content">

      </div>
    </div>
  )
}

export default HomePage;

