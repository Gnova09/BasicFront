
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Ima from '../../../assets/CallCentercontactos.jpg'

export const Portada = () => {
  return (
    <div className="flex bg-cover bg-center h-[650px]  relative w-full mt-20">
        <Image src={Ima} layout="fill" alt="Descripción de la imagen" className="-z-50" />
        <span className=" ml-4 flex flex-col  justify-center gap-2">
          <h1 className=" font-bold text-white md:text-4xl text-2xl  ">Productos y servicios</h1>
          <div className='w-full md:w-auto'>
            <Link href='/pages/contacto' class="  text-white bg-letters border border-primary hover:border-letters   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  bg-green-600 w  mr-2 mb-2 hover:text-white">
              Contactanos
            </Link>
          </div>
        </span>
      </div>
  )
}
