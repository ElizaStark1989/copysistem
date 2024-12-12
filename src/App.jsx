
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import QuienesSomos from './pages/QuienesSomos';
import RegisterPage from './pages/RegisterPage';
import CatalogoPage from './pages/CatalogoPage';
import ServiciosPage from './pages/ServiciosPage';
import CarritoPage from './pages/CarritoPage';
import FaqPage from './pages/FaqPage';
import { useSelector } from 'react-redux';
import Navbar from './pages/Navbar';
import FormularioInfo from './pages/FormularioInfo';



function App() {

  const printers = useSelector(states => states.printers)


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/quienesSomos' element={<QuienesSomos/>} />
        <Route path='/catalogo' element={<CatalogoPage/>} />
        <Route path='/servicios' element={<ServiciosPage/>} />
        <Route path='/favoriprints' element={<CarritoPage/>} />
        <Route path='/politicas' element={<FaqPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/formulario' element={<FormularioInfo/>}/>
      </Routes>
    </div>
  )
}

export default App;
