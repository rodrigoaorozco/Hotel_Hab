import React from 'react'
import { GaleriaDB } from './GaleriaDB'

function Galeria() {

    const hotelGaleria = GaleriaDB.find(item => item.category === 'hotel');

    
  return (
    <>
      <div className='mt-16 text-center w-full m-auto'>
        <h2>Galería de fotos de HotelIA</h2>
        <div className='w-3/4 m-auto flex flex-col'>
            <div className='flex flex-wrap w-full m-auto'>
            {hotelGaleria && hotelGaleria.images.map((src, index) => (
                            <img key={index} src={src} alt={`Hotel ${index + 1}`} className='my-3 w-48 mx-2' />
                        ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default Galeria
