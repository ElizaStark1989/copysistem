
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import QuienesSomos from './pages/QuienesSomos'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CatalogoPage from './pages/CatalogoPage'
import ServiciosPage from './pages/ServiciosPage'
import CarritoPage from './pages/CarritoPage'
import FaqPage from './pages/FaqPage'
import { useSelector } from 'react-redux'
import Navbar from './pages/Navbar'



function App() {

  const printers = useSelector(states => states.printers)

    console.log(printers)


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/QuienesSomos' element={<QuienesSomos/>} />
        <Route path='/Catalogo' element={<CatalogoPage/>} />
        <Route path='/Servicios' element={<ServiciosPage/>} />
        <Route path='/CarritoDeCompras' element={<CarritoPage/>} />
        <Route path='/FAQ' element={<FaqPage/>} />
        <Route path='/Politicas' element={<FaqPage/>} />
        <Route path='/Register' element={<RegisterPage/>} />
        <Route path='/Login' element={<LoginPage/>} />



      </Routes>
    </div>
  )
}

export default App;
