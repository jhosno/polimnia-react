import React from 'react';
import Footer from '../fragments/Footer'
import Navbar from '../fragments/Navbar'
import Sidebar from '../fragments/Sidebar'
import { Outlet } from 'react-router-dom'


//https://demos.creative-tim.com/notus-nextjs/landing
const Main = () => {
    return (
        <div className=' h-screen w-full grid grid-cols-5 gap-0 grid-rows-12 justify-evenly'>
            <Sidebar></Sidebar>
            
                <Navbar></Navbar>
                <div className="row-span-10 row-span-10 col-span-4">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            
        </div>
    );
};

export default Main;