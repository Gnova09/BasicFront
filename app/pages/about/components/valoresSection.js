import React from 'react'


const valores = [
    {
        logo: "M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z",
        valor: 'Excelencia',
        descripcion: `Ganamos aún en las situaciones
        más difíciles con pasión
        por lo que hacemos.`
    },
    {
        logo: "M 13 2 C 12.447 2 12 2.448 12 3 L 12 47 C 12 47.358 12.190953 47.689187 12.501953 47.867188 C 12.812953 48.045187 13.194906 48.043281 13.503906 47.863281 L 25 41.158203 L 36.496094 47.863281 C 36.651094 47.954281 36.826 48 37 48 C 37.172 48 37.344047 47.956187 37.498047 47.867188 C 37.809047 47.689188 38 47.358 38 47 L 38 33.167969 L 36 34.447266 L 36 45.259766 L 25.503906 39.136719 C 25.348906 39.045719 25.174 39 25 39 C 24.826 39 24.651094 39.045719 24.496094 39.136719 L 14 45.259766 L 14 4 L 36 4 L 36 13.205078 L 36.345703 12.298828 L 36.648438 11.996094 C 36.868437 11.776094 37.348953 11.365187 38.001953 11.117188 L 38.001953 3 C 38.001953 2.448 37.554953 2 37.001953 2 L 13 2 z M 39.0625 12.910156 C 38.6625 12.910156 38.2625 13.210156 38.0625 13.410156 L 35.662109 19.710938 L 28.962891 20.111328 C 28.562891 20.111328 28.1625 20.410547 28.0625 20.810547 C 27.9625 21.210547 28.062891 21.710156 28.462891 21.910156 L 33.5625 26.111328 L 31.861328 32.611328 C 31.761328 33.011328 31.961719 33.510937 32.261719 33.710938 C 32.461719 33.810938 32.661328 33.910156 32.861328 33.910156 C 33.062328 33.910156 33.263891 33.810938 33.462891 33.710938 L 39.0625 30.111328 L 44.662109 33.810547 C 44.962109 34.110547 45.461719 34.010547 45.761719 33.810547 C 46.161719 33.510547 46.262109 33.110937 46.162109 32.710938 L 44.462891 26.210938 L 49.662109 22.011719 C 49.962109 21.711719 50.062891 21.310156 49.962891 20.910156 C 49.862891 20.510156 49.4625 20.210938 49.0625 20.210938 L 42.361328 19.810547 L 39.962891 13.511719 C 39.862891 13.211719 39.4625 12.910156 39.0625 12.910156 z M 39.0625 16.710938 L 40.662109 21.210938 C 40.862109 21.510937 41.1625 21.810547 41.5625 21.810547 L 46.363281 22.111328 L 42.662109 25.111328 C 42.362109 25.311328 42.263281 25.711328 42.363281 26.111328 L 43.5625 30.710938 L 39.5625 28.111328 C 39.4625 28.011328 39.2625 27.910156 39.0625 27.910156 C 38.8615 27.910156 38.662891 28.011719 38.462891 28.011719 L 34.462891 30.611328 L 35.662109 26.011719 C 35.762109 25.711719 35.663281 25.211719 35.363281 25.011719 L 31.662109 22.011719 L 36.462891 21.810547 C 36.862891 21.710547 37.163281 21.511328 37.363281 21.111328 L 39.0625 16.710938 z",
        valor: 'Responsabilidad',
        descripcion: `Pensamos como dueños en lo que
        decidimos y en lo que hacemos.`
    },
    {
        logo: "M 13 2 C 12.447 2 12 2.448 12 3 L 12 47 C 12 47.358 12.190953 47.689187 12.501953 47.867188 C 12.812953 48.045187 13.194906 48.043281 13.503906 47.863281 L 25 41.158203 L 36.496094 47.863281 C 36.651094 47.954281 36.826 48 37 48 C 37.172 48 37.344047 47.956187 37.498047 47.867188 C 37.809047 47.689188 38 47.358 38 47 L 38 33.167969 L 36 34.447266 L 36 45.259766 L 25.503906 39.136719 C 25.348906 39.045719 25.174 39 25 39 C 24.826 39 24.651094 39.045719 24.496094 39.136719 L 14 45.259766 L 14 4 L 36 4 L 36 13.205078 L 36.345703 12.298828 L 36.648438 11.996094 C 36.868437 11.776094 37.348953 11.365187 38.001953 11.117188 L 38.001953 3 C 38.001953 2.448 37.554953 2 37.001953 2 L 13 2 z M 39.0625 12.910156 C 38.6625 12.910156 38.2625 13.210156 38.0625 13.410156 L 35.662109 19.710938 L 28.962891 20.111328 C 28.562891 20.111328 28.1625 20.410547 28.0625 20.810547 C 27.9625 21.210547 28.062891 21.710156 28.462891 21.910156 L 33.5625 26.111328 L 31.861328 32.611328 C 31.761328 33.011328 31.961719 33.510937 32.261719 33.710938 C 32.461719 33.810938 32.661328 33.910156 32.861328 33.910156 C 33.062328 33.910156 33.263891 33.810938 33.462891 33.710938 L 39.0625 30.111328 L 44.662109 33.810547 C 44.962109 34.110547 45.461719 34.010547 45.761719 33.810547 C 46.161719 33.510547 46.262109 33.110937 46.162109 32.710938 L 44.462891 26.210938 L 49.662109 22.011719 C 49.962109 21.711719 50.062891 21.310156 49.962891 20.910156 C 49.862891 20.510156 49.4625 20.210938 49.0625 20.210938 L 42.361328 19.810547 L 39.962891 13.511719 C 39.862891 13.211719 39.4625 12.910156 39.0625 12.910156 z M 39.0625 16.710938 L 40.662109 21.210938 C 40.862109 21.510937 41.1625 21.810547 41.5625 21.810547 L 46.363281 22.111328 L 42.662109 25.111328 C 42.362109 25.311328 42.263281 25.711328 42.363281 26.111328 L 43.5625 30.710938 L 39.5625 28.111328 C 39.4625 28.011328 39.2625 27.910156 39.0625 27.910156 C 38.8615 27.910156 38.662891 28.011719 38.462891 28.011719 L 34.462891 30.611328 L 35.662109 26.011719 C 35.762109 25.711719 35.663281 25.211719 35.363281 25.011719 L 31.662109 22.011719 L 36.462891 21.810547 C 36.862891 21.710547 37.163281 21.511328 37.363281 21.111328 L 39.0625 16.710938 z",
        valor: 'Honestidad',
        descripcion: `Hacemos lo que decimos
        y decimos lo que hacemos.`
    },
    {
        logo: "M 13 2 C 12.447 2 12 2.448 12 3 L 12 47 C 12 47.358 12.190953 47.689187 12.501953 47.867188 C 12.812953 48.045187 13.194906 48.043281 13.503906 47.863281 L 25 41.158203 L 36.496094 47.863281 C 36.651094 47.954281 36.826 48 37 48 C 37.172 48 37.344047 47.956187 37.498047 47.867188 C 37.809047 47.689188 38 47.358 38 47 L 38 33.167969 L 36 34.447266 L 36 45.259766 L 25.503906 39.136719 C 25.348906 39.045719 25.174 39 25 39 C 24.826 39 24.651094 39.045719 24.496094 39.136719 L 14 45.259766 L 14 4 L 36 4 L 36 13.205078 L 36.345703 12.298828 L 36.648438 11.996094 C 36.868437 11.776094 37.348953 11.365187 38.001953 11.117188 L 38.001953 3 C 38.001953 2.448 37.554953 2 37.001953 2 L 13 2 z M 39.0625 12.910156 C 38.6625 12.910156 38.2625 13.210156 38.0625 13.410156 L 35.662109 19.710938 L 28.962891 20.111328 C 28.562891 20.111328 28.1625 20.410547 28.0625 20.810547 C 27.9625 21.210547 28.062891 21.710156 28.462891 21.910156 L 33.5625 26.111328 L 31.861328 32.611328 C 31.761328 33.011328 31.961719 33.510937 32.261719 33.710938 C 32.461719 33.810938 32.661328 33.910156 32.861328 33.910156 C 33.062328 33.910156 33.263891 33.810938 33.462891 33.710938 L 39.0625 30.111328 L 44.662109 33.810547 C 44.962109 34.110547 45.461719 34.010547 45.761719 33.810547 C 46.161719 33.510547 46.262109 33.110937 46.162109 32.710938 L 44.462891 26.210938 L 49.662109 22.011719 C 49.962109 21.711719 50.062891 21.310156 49.962891 20.910156 C 49.862891 20.510156 49.4625 20.210938 49.0625 20.210938 L 42.361328 19.810547 L 39.962891 13.511719 C 39.862891 13.211719 39.4625 12.910156 39.0625 12.910156 z M 39.0625 16.710938 L 40.662109 21.210938 C 40.862109 21.510937 41.1625 21.810547 41.5625 21.810547 L 46.363281 22.111328 L 42.662109 25.111328 C 42.362109 25.311328 42.263281 25.711328 42.363281 26.111328 L 43.5625 30.710938 L 39.5625 28.111328 C 39.4625 28.011328 39.2625 27.910156 39.0625 27.910156 C 38.8615 27.910156 38.662891 28.011719 38.462891 28.011719 L 34.462891 30.611328 L 35.662109 26.011719 C 35.762109 25.711719 35.663281 25.211719 35.363281 25.011719 L 31.662109 22.011719 L 36.462891 21.810547 C 36.862891 21.710547 37.163281 21.511328 37.363281 21.111328 L 39.0625 16.710938 z",
        valor: 'Respeto',
        descripcion: `Escuchamos, comprendemos
        y aceptamos a los demás.`
    },

]
export const ValoresSection = () => {
    return (
        <div className='flex flex-col items-center mb-4'>
            <h1 className='font-extrabold text-3xl m-3'>
                Somos una empresa  <br /> asentada en valores solidos
            </h1>
            <div className=' grid grid-cols-2 grid-rows-2 gap-3 items-center justify-center w-3/4 max-w-fit'>

                {valores.map(({ logo, valor, descripcion },i) => {
                    return <div className='flex flex-col items-center 'key={i}>
                        <div className='text-white bg-blue-600 rounded-full w-min p-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                                <path d={logo}></path>
                            </svg>
                        </div>
                        <h1 className='font-bold text-lg'>
                            {valor}
                        </h1>
                        <p className='w-1/2 text-gray-600'>
                            {descripcion}</p>
                    </div>
                })}

            </div>
        </div>
    )
}
