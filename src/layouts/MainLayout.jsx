import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
            {/* Dynamic Section */}
            <Footer></Footer>
        </> 
    );
};

export default MainLayout;