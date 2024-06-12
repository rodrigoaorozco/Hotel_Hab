import React from "react";
import Carousel from "../home/Carousel";

function Reserva() {
  return (
    <>
      <div className="w-3/4 m-auto mt-6 text-center">
        <h2 className=' text-xl font-bold text-orange-600'>RESERVA TU ESTANCIA</h2>


      </div>
      <div className="w-full md:w-2/4 m-auto mt-12 p-4 text-center rounded">

        <div className="flex items-center justify-center p-1 md:p-6 w-full">
          <div className="mx-auto w-full  bg-white rounded shadow-2xl">
            <form>
              <div className="flex flex-wrap w-3/4 m-auto">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="m-3 block text-base font-bold text-[#07074D]"
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
                      className="m-3 block text-base font-bold text-[#07074D]"
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
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="m-3 block text-base font-bold text-[#07074D]"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre Completo..."
                  className="w-4/5 md:w-3/4 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="m-3 block text-base font-bold text-[#07074D]"
                >
                  Numero de Teléfono
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Teléfono..."
                  className="w-4/5 md:w-3/4 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="m-3 block text-base font-bold text-[#07074D]"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Correo Electrónico..."
                  className="w-4/5 md:w-3/4 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>


              <div className="mb-5 pt-3 w-2/4 m-auto">
                <label className="m-3 block text-base font-bold text-[#07074D] ">
                  Número de huespedes
                </label>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <label className="m-2 block text-base font-semibold text-[#07074D] ">
                      Adultos
                    </label>
                    <div className="mb-5">
                      <input
                        type="number"
                        name="area"
                        id="area"
                        placeholder="2"
                        className="w-2/4 rounded-md border text-center border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 sm:w-1/2">
                    <label className="m-2 block text-base font-semibold text-[#07074D] ">
                      Niños
                    </label>
                    <div className="mb-5">
                      <input
                        type="number"
                        name="city"
                        id="city"
                        placeholder="1"
                        className="w-2/4 rounded-md border text-center border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button className="hover:shadow-form w-2/5 lg:w-1/5 rounded-md mb-5  bg-slate-700 text-white p-2  hover:bg-slate-800 mt-2">
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