import React from 'react'
import Image from "next/image"
import Ima from "../../../assets/CallCentercontactos.jpg"
export const PortadaContact = () => {
    return (
        <div className="flex bg-cover bg-center h-[650px] relative w-full mt-20">
            <Image src={Ima} layout="fill" alt="Descripción de la imagen" className="-z-50" />
            <span className=" ml-4 flex flex-col  justify-center gap-2">
                <h1 className=" font-bold text-white md:text-4xl text-2xl  ">Contactanos</h1>
                <p className=" text-white md:text-l text-base">Estamos comprometidos con el buen servicio y <br />dispuesto atender sus necesidades</p>
            </span>
        </div>
    )
}
