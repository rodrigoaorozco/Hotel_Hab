import React from 'react'
import  Carousel  from './Carousel'
import { Link } from "react-router-dom";

function home() {
  return (
    <>
      <main className=' mt-12'>
            <Carousel></Carousel>
            <div className='w-3/4 m-auto bg-orange-200 mt-12 p-4 text-center'>
              <h2>VEN Y DISFRUTA DE UNA ESTANCIA DE LO MAS GLAMUROSA</h2>
              <p className='p-3'>¡Bienvenidos a HotelIA, su refugio de confort y elegancia! Situado en el corazón de la ciudad, nuestro hotel ofrece un ambiente acogedor y sofisticado, ideal tanto para viajes de negocios como de placer. Disfrute de nuestras instalaciones de primera clase, incluyendo un hermoso jardín, una piscina refrescante y un restaurante gourmet. Estamos comprometidos a brindarle una estancia inolvidable, llena de momentos especiales y atención personalizada. ¡Esperamos darle la bienvenida pronto!</p>
              <p>Disponemos de una amplia gama de habitaciones, incluyendo nuestras lujosas suites y opciones premium, diseñadas para brindarle el máximo confort y elegancia. Ya sea que viaje solo o en familia, encontrará el espacio perfecto para su estancia en HotelIA.</p>
              <div className='m-auto w-3/4 flex justify-center p-6'>
                <img src="/images/suite/suite11.jpg" className=' w-60 mx-6' alt="" />
                <img src="/images/premium/premium11.jpg" className=' w-60 mx-6' alt="" />
                <img src="/images/dormitorio/dormi11.jpg" className=' w-60 mx-6' alt="" />
              </div>
              <p>Disponemos de una amplia gama de habitaciones, incluyendo nuestras lujosas suites y opciones premium, diseñadas para brindarle el máximo confort y elegancia. Ya sea que viaje solo o en familia, encontrará el espacio perfecto para su estancia en HotelIA.</p>

              <Link to='/Galeria'><button className='p-2 my-2 bg-orange-400 rounded hover:bg-orange-500'>Ver Galería completa</button></Link>
              <h2 className='mt-10'>TODOS LOS SERVICIOS PARA TI</h2>
              <div className='m-auto w-3/4 flex justify-center p-6'>
                <img src="/images/hotel/piscina.jpg" alt="" className='w-60 mx-6' />
                <img src="/images/hotel/bar.jpg" alt="" className='w-60 mx-6' />
                <img src="/images/hotel/terraza.jpg" alt="" className='w-60 mx-6' />
                <img src="/images/hotel/jardin.jpg" alt="" className='w-60 mx-6' />
              </div>
              <p>En HOTELIA disponemos de los mejores espacios para tu descanso. disponemos de piscina techada, bar exterior, terraza solarium con las mejores vistas y un jardín para su descanso</p>
              <h2 className='mt-10'>RESTAURANTE BUFFET LIBRE</h2>
              <div className='m-auto w-3/4 flex justify-center p-6'>
                <img src="/images/hotel/comedor1.jpg" alt="" className='w-60 mx-6' />
                <img src="/images/hotel/comedor2.jpg" alt="" className='w-60 mx-6' />
                <img src="/images/hotel/comedor3.jpg" alt="" className='w-60 mx-6' />
              </div>
              <p>Ponemos a tu disposición nuestro comedor donde servimos comidas y cenas a la carta o en buffet libre, con los mejores cocineros seleccionados para ti.</p>
              <button className='p-2 my-4 bg-orange-400 rounded hover:bg-orange-500'>Reserva YA!</button>
            </div>
      </main>
    </>
  )
}

export default home
