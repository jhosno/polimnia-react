import React from 'react';
import { useNavigate } from 'react-router-dom';

const types = {
    warning : 'amber',
    info : 'indigo',
    error : 'rose',
    success : 'green'
}
const Bottons = ({message, type, id, to}) => {
    
    const navigate = useNavigate();
    const styles =`bg-${types[type]}-700 hover:bg-${types[type]}-600 active:bg-${types[type]}-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 cursor-pointer`

    return (
        <button type="button" className={styles}
            onClick={()=>navigate(to)}
        >
            {message}
        </button>
    );
};

export default Bottons;