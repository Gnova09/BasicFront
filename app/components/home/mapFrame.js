import React from 'react'

export const MapFrame = () => {
    return (
        <div className='flex self-center w-full'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30272.746582262414!2d-69.9624697543002!3d18.47943154964534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89ec5148da81%3A0xd795dd4b26306a90!2sAgora%20Mall!5e0!3m2!1ses!2sdo!4v1684422759749!5m2!1ses!2sdo"
                width={'100%'}
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}
