import React from 'react';
import { Link, useLocation } from 'react-router-dom'


const Sidebar = () => {
    return (
        <section className="sidebar bg-slate-900 row-span-12 text-slate-50 pl-4">
            <nav>
                <div className=' m-5 text-3xl font-bold'>
                    <Link to='/' className='hover:text-gray-400'>π Polimnia</Link>
                </div>
                <hr />
                <ul className='mt-5'>
                    <li className='mb-4'>
                        <Link to='/' className='hover:text-gray-400'>π  Home</Link>
                    </li>
                    <li className='mb-4'>
                        <Link to='/items' className='hover:text-gray-400'>π° Ventas</Link>
                    </li>
                    <li className='mb-4'>
                        <Link to='/items' className='hover:text-gray-400'>βπ° Nueva venta</Link>
                    </li>
                    <li className='mb-4'>
                        <Link to='/items' className='hover:text-gray-400'>π¦ Inventario</Link>
                    </li>
                    <li className='mb-4'>
                        <Link to='/items/add' className='hover:text-gray-400'>βπ¦ Agregar Γtems</Link>
                    </li>
                    <li className='mb-4'>
                        <Link to='/purchase' className='hover:text-gray-400'>πΈ Deudas</Link>
                    </li>
                    <li className='mb-4'>
                        <Link to='/contacts' className='hover:text-gray-400'>π₯ Contactos</Link>
                    </li>
                    <li className='mb-4'>
                        <Link to='/contacts/add' className='hover:text-gray-400'>βπ₯ Agregar Γtems</Link>
                    </li>
                </ul>

            </nav>
        </section>
    );
};

export default Sidebar;