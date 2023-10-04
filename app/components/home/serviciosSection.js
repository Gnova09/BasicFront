import Image from 'next/image'
import React from 'react'

const ProductosInfo = [
    {
        titulo: 'Desarrollo Web',
        descripcion: `Nuestros servicios de desarrollo web están diseñados para llevar 
        tu presencia en línea al siguiente nivel. Con un enfoque en la calidad, la creatividad 
        y la eficiencia, que no solo lucen increíbles, 
        sino que también funcionan de manera excepcional.`,
          ima: require("../../assets/img/webpage.jpg")
    },
    {
        titulo: 'Optimización de Motores de Búsqueda (SEO)',
        descripcion: `Nuestros servicios de SEO están diseñados para mejorar la visibilidad 
        en línea de tu negocio, aumentar el tráfico orgánico a tu sitio web y optimizar tu 
        presencia en los motores de búsqueda`,
        ima: require("../../assets/img/SEO.png")

    },
    {
        titulo: 'Mantenimiento y Soporte',
        descripcion: `Servicios de mantenimiento, actualización y soporte 
        continuo para garantizar el funcionamiento suave y seguro de las aplicaciones.`,
        ima: require("../../assets/img/soporte.png")
    },
]

export const ServiciosSection = () => {


    return (
        <div className='flex flex-col animate-fade-in-up  w-full px-48 py-24 '>
            <div className=' pb-12'>
                <h1 className='text-letters font-extrabold md:text-5xl text-2xl mb-5'>
                    Nuestros Servicios.
                </h1>
                <p className='text-gray-600'>
                Nuestro principal objetivo es agregar valor y eficiencia a sus procesos. <br/>
                Conoce nuestros servicios y apueste por la mejora continua de tu empresa.
                </p>
            </div>
            {/* seccion de card servicios */}
            <div className='flex flex-row gap-5  justify-center'>

                {ProductosInfo.map(({ titulo, descripcion, ima }) => {
                    return (
                        <div class=" w-1/3   bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#" className='h-1/3 '>
                                <Image class="rounded-t-lg w-full h-1/3" src={ima} alt="" width="500" height="500"/>
                            </a>
                            <div class="p-5 flex flex-col h-2/3 justify-between ">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titulo}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400">
                                    {descripcion} </p>
                                <a href="#" class="inline-flex bottom-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    )
                })}


            </div>

        </div>
    )
}
