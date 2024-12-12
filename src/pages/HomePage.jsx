
import "../pages/home.css";
import Carrusel from "./Carrusel";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";


const HomePage = () => {

  const discounts = [
    {
      product: "Cartucho de tinta HP",
      discount: "20% de descuento",
      image: "/images/cartucho.jpg"
    },
    {
      product: "Impresora Laser Color HP",
      discount: "15% de descuento",
      image: "/images/impresoraHP.jpeg"
    },
    {
      product: "Impresora ecologica",
      discount: "10% de descuento",
      image: "/images/ecoprinter.jpg"
    },
    {
      product: "Impresora portatil",
      discount: "10% de descuento",
      image: "/images/printerport.jpg"
    }
  ]

  const trendingProducts = [
    {
      name: "Impresora Multifuncional Inteligente",
      description: "Equipo todo en uno con conectividad en la nube y funciones avanzadas de seguridad.",
      image: "/images/imp-multifuncional.jpg"
    },
    {
      name: "Impresora Ecologica",
      description: "Diseñada para minimizar el consumo de energia y materiales reciclabes",
      image: "/images/imp-ecologica.jpg"
    },
    {
      name: "Impresora 3D de alta presicion",
      description: "Crea piezas complejas para aplicaciones industriales y médicas.",
      image: "/images/imp-3d.jpg"
    }
  ]

  return (
    <div className="home-page">
      <div className="banner-container">
        <img
          src="/images/banner22.png" alt="Banner de Impresoras" className="banner-image"
        />
      </div>
      <div className="welcome-text">
        <h1>Copysistem</h1>
        <p>La mejor tecnología para tus necesidades de impresión</p>
      </div>
      <div className="home-content">
        <Carrusel />
      </div>
      <div className="discounts">
        <h2>¡Imprime más, paga menos!</h2>
        <div className="discount-list">
          {discounts.map((discount, index) => (
            <div key={index} className="discount-card">
              <span className="discount-badge">{discount.discount}</span>
              <img
                src={discount.image}
                alt={discount.product}
                className="discount-image"
              />
              <h3>{discount.product}</h3>
              <p> Poner algo</p>
            </div>
          ))}
        </div>
      </div>
      <div className="trending-products">
        <h2>Tendencias que imprimen estilo</h2>
        <div className="product-list">
          {trendingProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image"></img>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <WhatsAppButton/>
      <Footer/>
    </div>
  );
};

export default HomePage;

