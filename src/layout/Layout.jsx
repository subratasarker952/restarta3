import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navbar />

            <main className='min-h-screen p-1'>
                <Outlet />
            </main>


            <Footer />
        </div>
    );
};

export default Layout;