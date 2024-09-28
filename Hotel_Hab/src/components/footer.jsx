import React from 'react'
import 'boxicons';

function Footer() {
    return (
        <>
            <div className='flex flex-col lg:flex-row lg:gap-3 w-full p-3 items-center pt-6 absolute bottom-0 left-0  bg-zinc-800'>
                <div className='flex  gap-4  w-full items-center justify-center text-white'>
                    <p>Siguenos en nuestras redes sociales:</p>
                    <div className='flex gap-12'>
                        <box-icon size="md" name='instagram' type='logo' color='#ffffff' ></box-icon>
                        <box-icon size="md" name='facebook-square' type='logo' color='#ffffff' ></box-icon>
                    </div>
                </div>
                <div className=' m-auto w-2/3 mt-2 text-white'>
                    <p>Plaza de la Lealtad, 8, 28014 Madrid, España</p>
                    <p>+34 96 7017 67 67</p>
                    <p>Hotelia_hotel@gmail.com</p>
                    
                </div>
                <div className='text-white font-bold text-center w-1/3 mt-2'>
                    <p>Estamos aquí:</p>
                    <div className='w-2/3 lg:w-1/3 m-auto'>
                        <a href="https://maps.app.goo.gl/SBbeHiTTgpvuxNbG7" target='_BLANK'> <img className='w-full mt-2 rounded' src="/images/mapa.png" alt="" /></a>
                    </div>
                </div>
                <p className='mt-6 absolute bottom-0 text-xs text-white'>Todos los Derechos Reservados©</p>
            </div>
        </>
    )
}

export default Footer
