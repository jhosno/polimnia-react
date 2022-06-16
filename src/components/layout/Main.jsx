import React from 'react';
import Footer from '../fragments/Footer'
import Navbar from '../fragments/Navbar'
import Sidebar from '../fragments/Sidebar'
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div className='bg-zinc-700 h-screen w-full grid grid-cols-5 gap-0 justify-evenly'>
            <Sidebar></Sidebar>
            <div className="bg-red-900 col-span-4 w-full">
                <Navbar></Navbar>
                <div >
                    <Outlet></Outlet>

                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;