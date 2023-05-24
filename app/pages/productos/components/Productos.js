import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



export const Productos = () => {
    const ProductosInfo = [
        {
            titulo: 'Producto 1',
            descripcion: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Nullam vel malesuada enim.
            Donec rhoncus est ut urna venenatis,
            eget faucibus libero rhoncus. Praesent
            nec mi vitae magna congue interdum.
            Vivamus luctus augue vel enim ultrices venenatis.
            Nam quis ante in metus adipiscing tincidunt ac ac tellus.`,
            ima: require('../../../assets/productos/Producto1.jpg'),
            link: '/pages/productos'
        },
        {
            titulo: 'Producto 2',
            descripcion: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Nullam vel malesuada enim.
            Donec rhoncus est ut urna venenatis,
            eget faucibus libero rhoncus. Praesent
            nec mi vitae magna congue interdum.
            Vivamus luctus augue vel enim ultrices venenatis.
            Nam quis ante in metus adipiscing tincidunt ac ac tellus.`,
            ima: require('../../../assets/productos/Producto1.jpg'),
            link: '/pages/productos'
        },
        {
            titulo: 'Producto 3',
            descripcion: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Nullam vel malesuada enim.
            Donec rhoncus est ut urna venenatis,
            eget faucibus libero rhoncus. Praesent
            nec mi vitae magna congue interdum.
            Vivamus luctus augue vel enim ultrices venenatis.
            Nam quis ante in metus adipiscing tincidunt ac ac tellus.`,
            ima: require('../../../assets/productos/Producto1.jpg'),
            link: '/pages/productos'
        },
    ]

    return (
        <div className='flex flex-col gap-10 p-10'>
            {
                ProductosInfo.map(({ titulo, descripcion, ima, link }) => {
                  return  <div className='flex-row flex gap-2'>
                        <div className='flex flex-col justify-center mr-5 ml-5 gap-10 w-2/4 '>
                            <div>
                                <h1 className='text-letters font-extrabold text-xl mb-5'>{titulo}</h1>
                                <p className='  text-sm md:text-base lg:text-xl text-justify text-gray-600 w-3/4 '>
                                    {descripcion}
                                </p>
                            </div>
                            <div className='w-full md:w-auto'>
                                <Link href={link} class="text-letters bg-secondary  border  hover:border-letters focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-transparent bg-green-600 w  mr-2 mb-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-5 mr-2 -ml-1' viewBox="0 0 50 50" fill='currentColor'>
                                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z">
                                        </path>
                                    </svg>
                                    Mas informacion
                                </Link>
                            </div>
                        </div>
                        <div className=' w-2/4 '>
                            <Image src={ima} alt="Descripción de la imagen" className="w-full rounded-md" />
                        </div>
                    </div>

                })
            }

        </div>
    )
}
