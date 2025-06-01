import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            {/* Dynamic Section */}
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;