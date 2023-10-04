import Link from 'next/link'
import React from 'react'

export const AboutSection = () => {
    return (
        <div className=' px-4 pb-24 w-full flex items-start animate-slide-right '>
            <div className=' gap-4 flex flex-col'>
                <h1 className='text-letters font-extrabold md:text-5xl text-2xl mb-5 ab'>
                    Innovando hoy para un mañana más eficiente.
                </h1>
                <p className='text-gray-600 w-3/4'>
                    Nos especializamos en ofrecer una solución completa que 
                    abarca desde la creación y diseño de sitios web hasta la 
                    implementación, mantenimiento y servicios de prestigiosas 
                    marcas y sus productos en línea.
                </p>
                <div className='w-full md:w-auto'>
                    <Link href="/pages/about" class="text-letters font-bold bg-transparent hover:underline text-m px-5 py-2.5 text-center inline-flex items-center focus:ring-transparent w  mr-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-5 mr-2 -ml-1' viewBox="0 0 50 50" fill='currentColor'>
                            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z">
                            </path>
                        </svg>
                        Conoce mas sobre nosotros
                    </Link>
                </div>
            </div>

        </div>
    )
}
