import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            {/* Dynamic Section */}
            <Outlet></Outlet>
            <Footer></Footer>
        </> 
    );
};

export default MainLayout;