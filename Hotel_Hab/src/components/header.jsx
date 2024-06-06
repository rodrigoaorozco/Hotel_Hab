import 'boxicons'
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <div className=' bg-slate-700 w-auto flex items-center relative'>
        <Link to='/'><img src="/images/logo.png" className=' max-w-64' alt="" /></Link>
        <div className="m-auto text-center ">
          <h1 className='text-5xl text-amber-500'>LE DAMOS LA BIENVENIDA A HOTELIA</h1>
          <h2 className='text-1xl  text-amber-600 mt-2'>El primer hotel de Europa con Inteligencia Artificial</h2>
        </div>
        <div className="flex gap-4 absolute top-0 right-0 p-3 mr-1">
        <box-icon name='envelope' color='#f3f2f2' ></box-icon>
        <box-icon name='user' color='#ffffff' ></box-icon>
        </div>
        <div className='flex gap-5 text-gray-300 p-3 mr-4 absolute bottom-0 right-0 text-xl'>
          <a href="">Estancias</a>
          <a href="">Reserva</a>
          <Link to='/Galeria'>Galería</Link>
          <a href="">Contacto</a>
        </div>
      </div>
    </>
  )
}

export default Header
