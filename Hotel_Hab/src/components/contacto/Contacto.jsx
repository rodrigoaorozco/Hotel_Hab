import React from 'react'
import '../../App.css';

function Contacto() {
    return (
        <>
            <div className='mt-8 m-auto w-2/3 text-center'>
                <h3 className='text-xl text-orange-500 font-bold'>RELLENA EL FORMULARIO DE CONTACTO</h3>
                <p className='mt-12 w-3/4 m-auto'>Para caulquier duda o consulta Hotelia dispone de un formulario de contacto que podrás rellenar a continuación y estaremos encantados de resolver todas tus dudas, y en un plazo máximo de 24h nuestro hotel dará respuesta a tus preguntas o dudas. Gracias por tu confianza.</p>
                <div className=' w-3/5 bg-orange-200 m-auto mt-8 p-6 rounded'>
                    <div className='m-5 w-full flex flex-col items-center'>
                        <label>Nombre:</label>
                        <input type="text" placeholder='Nombre...' className='w-2/4 rounded p-1 m-auto' />
                    </div>
                    <div className='m-5 w-full flex flex-col items-center'>
                        <label>Apellido:</label>
                        <input type="text" placeholder='Apellido...' className='w-2/4 rounded p-1' />
                    </div>
                    <div className='m-5 w-full flex flex-col items-center'>
                        <label>Email:</label>
                        <input type="email" placeholder='Email...' className='w-2/4 rounded p-1' />
                    </div>
                    <div className='m-5 w-full flex flex-col items-center'>
                        <label>Consulta:</label>
                        <input type="textarea" placeholder='Escribe aquí tu consulta...' className='w-2/4 h-20 rounded p-1' />
                    </div>
                    <button className=' bg-orange-300 p-2 rounded hover:bg-orange-400'>Enviar</button>
                </div>
            </div>

        </>
    )
}

export default Contacto
