import React from 'react'
import { GaleriaDB } from './GaleriaDB'

function Galeria() {

    const hotelGaleria = GaleriaDB.find(item => item.category === 'hotel');
    const habGaleria = GaleriaDB.find(item => item.category === 'dormitorio');
    const dormGaleria = GaleriaDB.find(item => item.category === 'matrimonio');
    const premiumGaleria = GaleriaDB.find(item => item.category === 'premium');
    const suiteGaleria = GaleriaDB.find(item => item.category === 'suite');


    return (
        <>
            <div className='mt-6 text-center w-full m-auto'>
                <h2 className='text-xl font-bold text-orange-600 m-auto mb-3'>GALERÍA DE FOTOS DE HOTELIA</h2>
                <div className='w-3/4 m-auto flex flex-col'>
                    <h3 className='mt-6'>NUESTRO HOTEL</h3>
                    <div className='flex flex-wrap w-full m-auto justify-center'>
                        {hotelGaleria && hotelGaleria.images.map((src, index) => (
                            <img key={index} src={src} alt={`Hotel ${index + 1}`} className='my-3 w-48 mx-2 hover:scale-150 duration-500' />
                        ))}
                    </div>
                    <div className='flex justify-around'>
                        <div>
                            <h3 className='mt-6'>HABITACIONES DOBLES</h3>
                            <div className='flex flex-wrap w-full m-auto justify-center'>
                                {habGaleria && habGaleria.images.map((src, index) => (
                                    <img key={index} src={src} alt={`Hotel ${index + 1}`} className='my-3 w-40 mx-4 hover:scale-150 duration-500' />
                                    
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className='mt-6'>HABITACIONES ADVANCE</h3>
                            <div className='flex flex-wrap w-full m-auto justify-center'>
                                {dormGaleria && dormGaleria.images.map((src, index) => (
                                    <img key={index} src={src} alt={`Hotel ${index + 1}`} className='my-3 w-40 mx-4 hover:scale-150 duration-500' />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='mt-8'>HABITACIONES PREMIUM</h3>
                        <div className='flex flex-wrap w-full m-auto justify-center'>
                                {premiumGaleria && premiumGaleria.images.map((src, index) => (
                                    <img key={index} src={src} alt={`Hotel ${index + 1}`} className='my-3 w-40 mx-4 hover:scale-150 duration-500' />
                                ))}
                        </div>

                    </div>
                    <div>
                        <h3 className='mt-8'>HABITACIONES SUITE EXCLUSIVAS</h3>
                        <div className='flex flex-wrap w-full m-auto justify-center'>
                                {suiteGaleria && suiteGaleria.images.map((src, index) => (
                                    <img key={index} src={src} alt={`Hotel ${index + 1}`} className='my-3 w-40 mx-6 hover:scale-150 hover:shadow-slate-500 duration-500' />
                                ))}
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Galeria
