
import './App.css'
import { Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/home/Home';
import Footer from './components/Footer';
import Galeria from './components/galeria/Galeria';
import  Login  from './components/login/Login';
import Contacto from './components/contacto/Contacto';

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path='/Contacto' element={<Contacto />}/>
        
      </Routes>

      <Footer />
    </>
  );
}

export default App
