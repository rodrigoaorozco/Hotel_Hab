import React from 'react'
import 'boxicons';

function Footer() {
    return (
        <>
            <div className='flex w-full p-5 items-center content-center pt-6 absolute bottom-0 left-0  bg-zinc-800'>
                <div className='flex flex-col gap-4 items-center content-center w-1/3 text-white'>
                    <p>Siguenos en nuestras redes sociales:</p>
                    <div className='flex gap-12'>
                        <box-icon size="md" name='instagram' type='logo' color='#ffffff' ></box-icon>
                        <box-icon size="md" name='facebook-square' type='logo' color='#ffffff' ></box-icon>
                    </div>
                </div>
                <div className='text-center m-auto w-1/3 text-white'>
                    <p>Plaza de la Lealtad, 8, 28014 Madrid, España</p>
                    <p>+34 96 7017 67 67</p>
                    <p>Hotelia_hotel@gmail.com</p>
                    <p className=' -mb-8 mt-14 text-xs'>Todos los Derechos Reservados©</p>
                </div>
                <div className='text-white text-center w-1/3'>
                    <p>Estamos aquí:</p>
                    <div className='w-1/3 m-auto'>
                        <a href="https://maps.app.goo.gl/SBbeHiTTgpvuxNbG7" target='_BLANK'> <img className='w-full mt-2' src="/images/mapa.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
