import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const MainLayout = () => {
    const [navbarPurpleColor, setNavbarPurpleColor] = useState(true);

    const [cartItems, setCartItems] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const allData = useLoaderData();

    const navbarBgColor = navbarPurpleColor ? "mb-0 rounded-tl-4xl rounded-tr-4xl p-6 justify-between flex items-center" : "bg-[#9538E2] mt-4 text-white w-[95%] mx-auto mb-0 rounded-tl-4xl rounded-tr-4xl p-6 justify-between flex items-center";

    const navbarColorChanging = (val) => {
        setNavbarPurpleColor(val);
    }

    return (
        <>
            <Navbar navbarBgColor={navbarBgColor}></Navbar>
            <Outlet
                context={{
                    navbarColorChanging: navbarColorChanging,
                    cartItems: cartItems,
                    setCartItems: setCartItems,
                    wishlist: wishlist,
                    setWishlist: setWishlist,
                    allData: allData
                }}>
            </Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;
