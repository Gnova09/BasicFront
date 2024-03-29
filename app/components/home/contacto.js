"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const Contacto = () => {
    const [animate,setAnimate]=useState(false)

    useEffect(()=>{
        setAnimate(true)
    },[])

    return (
        <div className={`flex ${animate ? "animate-slide-right":""} flex-col w-full h-72 bg-blue-300 items-center justify-center `}>
            <h1 className='text-letters font-extrabold md:text-5xl text-2xl mb-5'>Ponte en contacto con nosotros</h1>
            <div className='w-full md:w-auto'>
                <Link href="/pages/contacto" class="text-letters bg-slate-400  border hover:border-slate-400 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-transparent bg-green-600 w  mr-2 mb-2 ">
                    Envianos un mensaje
                </Link>
            </div>
        </div>
    )
}
