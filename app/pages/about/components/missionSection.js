import React from 'react'

export const MissionSection = () => {
    return (
        <div className='flex flex-row items-center pt-20 pb-20 pl-10 pr-10 bg-blue-300 w-full'>
            <div className='h-full flex flex-col items-center justify-center gap-2 '>
                <h1 className=' text-4xl font-extrabold '>
                    Nuestra Mision
                </h1>
                <p className='text-justify text-gray-600 text-sm w-1/2 '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel malesuada enim. Donec rhoncus est ut urna venenatis, eget faucibus libero rhoncus. Praesent nec mi vitae magna congue interdum. Vivamus luctus augue vel enim ultrices venenatis. Nam quis ante in metus adipiscing tincidunt ac ac tellus.
                </p>
            </div>

            <div className=' h-full flex flex-col items-center justify-center gap-2 '>
                <h1 className=' text-4xl font-extrabold '>
                    Nuestra Vision
                </h1>
                <p className='text-justify text-gray-600 text-sm w-1/2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel malesuada enim. Donec rhoncus est ut urna venenatis, eget faucibus libero rhoncus. Praesent nec mi vitae magna congue interdum. Vivamus luctus augue vel enim ultrices venenatis. Nam quis ante in metus adipiscing tincidunt ac ac tellus.
                </p>
            </div>

        </div>
    )
}
