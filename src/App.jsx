import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Scrolltopo from "./Scrolltopo"; // Importando o ScrollToTop
import Home from './pages/home/Home'
import Voluntario from './pages/voluntario/Voluntario.'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import  './globalStyler.scss'

const App = () => {
  return (
    <>
   
      <BrowserRouter>
         <Scrolltopo /> {/* Rolar para o topo em qualquer mudança de rota */}
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/voluntario' element={<Voluntario/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
