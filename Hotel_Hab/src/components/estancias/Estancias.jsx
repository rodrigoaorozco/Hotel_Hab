import React from 'react'
import { Link } from "react-router-dom";

function Estancias() {
    return (
        <>
            <div className='w-full md:w-3/4 mt-6 m-auto text-center'>
                <h2 className=' text-xl font-bold text-orange-600'>NUESTAS ESTANCIAS DISEÑADAS PARA TI</h2>
                <div>
                    <h3 className='mt-12 mb-3'>HABITACION DOBLE SENCILLA</h3>
                    <div className='flex justify-center flex-col items-center md:flex-row gap-8'>
                        <img src="/images/dormitorio/dormi11.jpg" alt=""  className='w-1/2 md:w-2/5 hover:scale-110 duration-300'/>
                        <img src="/images/dormitorio/dormitorio12.jpg" alt="" className='w-1/2 md:w-2/5 hover:scale-110 duration-300' />
                        <img src="/images/dormitorio/dormitorio13.jpg" alt="" className='w-1/2 md:w-2/5 hover:scale-110 duration-300' />
                    </div>
                    <p className='w-3/4 m-auto mt-5'>
                        Nuestra habitacion doble, dispone de vistas espectaculares con baño propio un toque minimalista y vistas al mar o al jardin del hotel.
                    </p>
                    <Link to='/Reserva'><button className=' bg-slate-700 text-white p-2 rounded hover:bg-gray-900 mt-2'>Reservar</button></Link>
                </div>
                <div>
                    <h3 className='mt-12 mb-3'>HABITACION DOBLE ADVANCE</h3>
                    <div className='flex justify-center flex-col items-center md:flex-row gap-8'>
                        <img src="/images/matrimonio/matrimonio11.jpg" alt="" className='w-2/3 md:w-2/5 hover:scale-110 duration-300' />
                        <img src="/images/matrimonio/matrimonio12.jpg" alt="" className='w-2/3 md:w-2/5 hover:scale-110 duration-300' />
                        <img src="/images/matrimonio/matrimonio13.jpg" alt=""  className='w-2/3 md:w-2/5 hover:scale-110 duration-300'/>
                    </div>
                    <p className='w-3/4 m-auto mt-5'>
                        Nuestra habitacion ADVANCE, dispone de vistas espectaculares con baño propio un toque minimalista y vistas al mar o al jardin del hotel.
                    </p>
                    <Link to='/Reserva'><button className=' bg-slate-700 text-white p-2 rounded hover:bg-gray-900 mt-2'>Reservar</button></Link>
                </div>
                <div>
                    <h3 className='mt-12 mb-3'>HABITACION PREMIUM</h3>
                    <div className='flex justify-center flex-col items-center md:flex-row gap-8'>
                        <img src="/images/premium/premium11.jpg" alt="" className='w-2/3md:w-2/5 hover:scale-110 duration-300' />
                        <img src="/images/premium/premium12.jpg" alt="" className='w-2/3 md:w-2/5 hover:scale-110 duration-300' />
                        <img src="/images/premium/premium13.jpg" alt="" className='w-2/3 md:w-2/5 hover:scale-110 duration-300' />
                    </div>
                    <p className='w-3/4 m-auto mt-5'>
                        Nuestra habitacion PREMIUM, disponemos de 4 habitaciones premium, de vistas espectaculares con baño propio un toque minimalista y vistas al mar o al jardin del hotel.
                    </p>
                    <Link to='/Reserva'><button className=' bg-slate-700 text-white p-2 rounded hover:bg-gray-900 mt-2'>Reservar</button></Link>
                </div>
                <div>
                    <h3 className='mt-12 mb-3'>SUITE EXCLUSIVAS </h3>
                    <div className='flex justify-center flex-col items-center md:flex-row gap-8'>
                        <img src="/images/suite/suite11.jpg" alt="" className='w-2/3 md:w-2/5 hover:scale-110 duration-300' />
                        <img src="/images/suite/suite12.jpg" alt="" className='w-2/3 md:w-2/5 hover:scale-110 duration-300' />
                        <img src="/images/suite/suite13.jpg" alt="" className='w-2/3 md:w-2/5 hover:scale-110 duration-300' />
                    </div>
                    <p className='w-3/4 m-auto mt-5'>
                        Nuestra habitacion SUITE, solo disponemos de una Suite en nuestro hotel, para que te sientas único. Dispone de vistas espectaculares con baño propio un toque minimalista y vistas al mar o al jardin del hotel.
                    </p>
                    <Link to='/Reserva'><button className=' bg-slate-700 text-white p-2 rounded hover:bg-gray-900 mt-2'>Reservar</button></Link>
                </div>

            </div>
        </>
    )
}

export default Estancias
