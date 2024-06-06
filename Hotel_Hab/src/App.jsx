
import './App.css'
import { Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/home/Home';
import Footer from './components/Footer';
import Galeria from './components/galeria/Galeria';

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path="/Galeria" element={<Galeria />} />
        
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
