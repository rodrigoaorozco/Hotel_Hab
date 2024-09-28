import 'boxicons'
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Header() {

  const [showMessage, setShowMessage] = useState(false);

  const handleMouseEnter = () => {
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  return (
    <>
      <div className=' bg-slate-700 w-full flex items-center relative h-60 md:h-auto'>
        <Link to='/' className='w-1/4'><img src="/images/logo.png" className=' w-full' alt="logo de Hotelia" /></Link>
        <div className="m-auto text-center flex flex-col justify-center">
          <h1 className='lg:text-4xl md:2xl text-md text-amber-500'>LE DAMOS LA BIENVENIDA A HOTELIA</h1>
          <h2 className='lg:text-xl md:sm text-xs   text-amber-600 mt-2'>Su bienestar, nuestro objetivo</h2>
        </div>
        <div className="flex gap-4 absolute top-0 right-0 p-3 mr-1">
          <box-icon
            name="envelope"
            color="#f3f2f2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></box-icon>
          {showMessage && (
            <div className="absolute top-1 right-20 mt-2 w-64 p-2 bg-white border border-gray-300 rounded">
              <p>No tienes mensajes</p>
            </div>
          )}
          <Link to='/login'> <box-icon name='user' color='#ffffff' ></box-icon></Link>
        </div>
        <div className='md:mr-3 text-gray-300 p-1  absolute bottom-0 right-0 '>
          <Link to='/Estancias' className='m-2 hover:text-slate-400'>Estancias</Link>
          <Link to='/Reserva' className='m-2 hover:text-slate-400'>Reserva</Link>
          <Link to='/Galeria' className='m-2 hover:text-slate-400'>Galería</Link>
          <Link to='/Contacto' className='m-2 hover:text-slate-400'>Contacto</Link>
        </div>
      </div>
    </>
  )
}

export default Header
