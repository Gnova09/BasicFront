import React from 'react'

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

    },
]

export const ServiciosSection = () => {


    return (
        <div className='flex flex-col w-full px-48 py-24'>
            <div className=' pb-12'>
                <h1 className='text-letters font-extrabold md:text-5xl text-2xl mb-5'>
                    Nuestros productos.
                </h1>
                <p className='text-gray-600'>
                    Nos dedicamos a la comercialización, fabricación, importación,<br />
                    exportación, servicio de postventa de prestigiosas marcas y productos.
                </p>
            </div>
            {/* seccion de card servicios */}
            <div className='flex flex-row gap-5 items-center justify-center'>

                {ProductosInfo.map(({ titulo, descripcion }) => {
                    return (
                        <div class="max-w-sm bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titulo}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400">
                                    {descripcion} </p>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
