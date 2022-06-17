import React from 'react';
import { Link, useLocation } from 'react-router-dom'


const Sidebar = () => {
    return (
        <section className="sidebar bg-slate-900 row-span-12">
            <nav>
                <div>
                    <Link to='/'>🌀 Polimnia</Link>
                </div>
                <ul>
                    <li>
                        <Link to='/'>🏠 Home</Link>
                    </li>
                    <li>
                        <Link to='/items'>📦 Inventario</Link>
                        <Link to='/items/add'>➕📦 Agregar Ítems</Link>
                    </li>
                    <li>
                        <Link to='/purchase'>💸 Deudas</Link>
                    </li>
                </ul>
                <footer>
                    Made with 🎶 by {' '}
                    
                </footer>
            </nav>
        </section>
    );
};

export default Sidebar;