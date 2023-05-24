import React from 'react'
import ima from '../../../assets/about/bosschair.jpg'
import Link from 'next/link'
import Image from 'next/image'

const descripcion = `Al inicio de la década del 60,una empresaria dominicana, 
inició un proceso de diversificación y expansión del pequeño negocio familiar. 
Se enfocó en la comercialización. 
Desde entonces, se añadieron paulatinamente diversas marcas y otros tipos de productos. 
Fuimos creciendo consistentemente hasta consolidarnos en una de las empresas más importantes de República Dominicana.
El desarrollo comercial y la importancia que hemos alcanzado hasta nuestros días nos convierten en un punto de referencia obligatorio 
dentro del ámbito empresarial dominicano.
Somos gente abierta, alegre, innovadora, 
con pasión y alto compromiso con los resultados.
`
export const Historysection = () => {
  return (
    <div className='flex-row gap-5 flex w-2/4 items-center mb-20 mt-20 '>
                        <div className='flex flex-col justify-center  ml-5 gap-10 w-2/4 '>
                            <div>
                                <h1 className='text-letters font-extrabold text-2xl mb-5'>Nuestros inicios</h1>
                                <p className=' text-ms text-justify text-gray-600  '>
                                    {descripcion}
                                </p>
                            </div>
                            <div className='w-full md:w-auto'>
                                <Link href="/about" class="text-letters font-bold bg-transparent hover:underline text-m px-5 py-2.5 text-center inline-flex items-center focus:ring-transparent w  mr-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-5 mr-2 -ml-1' viewBox="0 0 50 50" fill='currentColor'>
                                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z">
                                        </path>
                                    </svg>
                                    Conoce la historia completa
                                </Link>
                            </div>
                        </div>
                        <div className=' w-2/4'>
                            <Image src={ima} alt="Descripción de la imagen" className="w-full" />
                        </div>
                    </div>
  )
}
