import React from 'react';
const types = {
    warning: 'amber',
    info: 'indigo',
    error: 'rose',
    success: 'green'
}
const Alerts = ({ type, message }) => {
    {/*Aquí voy a poner los estilos cuando decida poner los estilos*/ }
    const styles =`bg-${types[type]}-700 hover:bg-${types[type]}-600 active:bg-${types[type]}-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 cursor-pointer`
    return (
        <div className='bg-red-700/90 text-rose-50 px-3 py-2 rounded-b-lg  animate-pulse '>
            {message}
        </div>
    );
};

export default Alerts;