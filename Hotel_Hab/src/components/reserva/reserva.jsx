import React from "react";
import Carousel from "../home/Carousel";

 function Reserva () {
    return (
      <>
       <div className="w-3/4 m-auto mt-6 text-center">
       <h2 className=' text-xl font-bold text-orange-600'>RESERVA TU ESTANCIA</h2>
       

       </div>
        <div className="w-3/4 m-auto bg-orange-200 mt-12 p-4 text-center">
          <Carousel></Carousel>
          <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
              <form>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="m-3 block text-base font-medium text-[#07074D]"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre Completo"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="m-3 block text-base font-medium text-[#07074D]"
                  >
                    Numero de Telefono
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Ingresa Tu Numero de Telefono"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="m-3 block text-base font-medium text-[#07074D]"
                  >
                    Correo Electronico
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ingresa Tu Correo Electronico"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="date"
                        className="m-3 block text-base font-medium text-[#07074D]"
                      >
                        Fecha Entrada
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="date"
                        className="m-3 block text-base font-medium text-[#07074D]"
                      >
                        Fecha Salida
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-5 pt-3">
                  <label className="m-3 block text-base font-semibold text-[#07074D] sm:text-xl">
                    Numero de personas
                  </label>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <label className="m-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                        Adultos
                      </label>
                      <div className="mb-5">
                        <input
                          type="number"
                          name="area"
                          id="area"
                          placeholder="Enter area"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>

                    <div className="w-full px-3 sm:w-1/2">
                      <label className="m-2 block text-base font-semibold text-[#07074D] sm:text-xl">
                        Niños
                      </label>
                      <div className="mb-5">
                        <input
                          type="number"
                          name="city"
                          id="city"
                          placeholder="Enter city"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button className="hover:shadow-form w-full rounded-md  bg-slate-700 text-white p-2 rounded hover:bg-gray-900 mt-2">
                    BUSCAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default Reserva