import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Bottons from '../fragments/Bottons';




const Item = ({ item, handleSubmitDelete}) => {
    const { name, price_unit, description, amount, id } = item
    
    return (
        <tr className='hover:bg-slate-100 items-center content-center' >
            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {id}
            </td>
            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                {name}
            </th>
            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {description}
                
            </td>
            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {price_unit}
            </td>
            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {amount}
            </td>

            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <Bottons message="Ver" type="info" to={`/items/${id}`}></Bottons>
                <Bottons message="Editar" type="warning" to={`/items/edit/${id}`}></Bottons>
                <button type="button" className="bg-rose-700 hover:bg-rose-600 active:bg-rose-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 cursor-pointer" onClick={()=> handleSubmitDelete(id)}>Eliminar</button>
                
    
                
                {/*<a className="text-blueGray-500 py-1 px-3" href="#pablo">
                    <i className="fas fa-ellipsis-v">
                    </i>
                </a>
                <div className="block bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" style={{position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate(-52px, 122px)", }}>,
                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action
                    </a>
                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
                        Another action
                    </a>
                    <a href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
                        Something else here
                    </a>
    </div>*/}
            </td>
        </tr>

    );
};

export default Item;