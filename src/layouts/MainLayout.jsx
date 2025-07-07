import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const MainLayout = () => {

    const [navbarPurpleColor, setNavbarPurpleColor] = useState(true);

    const data = useLoaderData();
    // console.log(data[0]);

    const {product_id, price} = data[0];

    // console.log(product_id, price);

    const [cartItems, setCartItems] = useState([]);

    let hasItem = 0;

    const handleAddToCart = () => {
        if (cartItems.length == 0) {
            setCartItems([...cartItems, { product_id, price, product_title, description, product_image }]);
            toast.success("Item added!");
        }
    }

    // console.log(cartItems);

    // const [totalPrice, setTotalPrice] = useState(0);

    // setTotalPrice(totalPrice + cartItems.price);
    // console.log(totalPrice);

    const navbarBgColor = navbarPurpleColor ? "mb-0 rounded-tl-4xl rounded-tr-4xl p-6 justify-between flex items-center" : "bg-[#9538E2] text-white m-[30px] mb-0 rounded-tl-4xl rounded-tr-4xl p-6 justify-between flex items-center";

    const navbarColorChanging = (val) => {
        setNavbarPurpleColor(val);
    }

    return (
        <>
            <Navbar cartItems={cartItems} navbarBgColor={navbarBgColor}></Navbar>
            <Outlet
                context={{
                    navbarColorChanging: navbarColorChanging,
                    cartItems: cartItems,
                    setCartItems: setCartItems
                }}>
            </Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;
