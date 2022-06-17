import React from 'react';


const Footer = () => {
    return (
        <footer className='bg-slate-200 text-slay-50 flex flex-row justify-between content-center p-4 items-center col-span-4'>
            <div className='basis-2/5'>
                Copyright © 2022
                Made with 🎶 by Jhosno
            </div>
            <div className='basis-3/5 flex flex-row justify-end align-center'>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='pr-4'>Jhosno</a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='pr-4'>About me</a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='pr-4'>Blog</a>
            </div>
            
        </footer>
    );
};

export default Footer;