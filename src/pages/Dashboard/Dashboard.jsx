import { useEffect } from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";

const Dashboard = () => {

    const { navbarColorChanging, cartItems, setCartItems, wishlist } = useOutletContext();

    useEffect(() => {
        navbarColorChanging(true);

        return () => navbarColorChanging(false);
    }, [navbarColorChanging]);

    return (
        <div>
            <div className="bg-[#9538E2] z-0 py-[32px] space-y-[24px]">
                <h1 className="text-white font-bold text-[32px] text-center">Dashboard</h1>
                <p className="text-white text-center w-[70%] mx-auto">Track Your Favorites, Purchases & Spending at a Glance</p>
                <div className="text-center space-x-6">
                    <NavLink to="/dashboard/cart" className={({ isActive }) => isActive ? "btn border shadow-none rounded-4xl px-14 py-[13px] justify-center items-center text-[18px] font-extrabold bg-white text-[#9538E2]" : "btn border shadow-none rounded-4xl px-14 py-[13px] justify-center items-center text-[18px] font-extrabold bg-[#9538E2] text-white"}>Cart</NavLink>
                    <NavLink to="/dashboard/wishlist" className={({ isActive }) => isActive ? "btn border shadow-none rounded-4xl px-14 py-[13px] justify-center items-center text-[18px] font-extrabold bg-white text-[#9538E2]" : "btn border shadow-none rounded-4xl px-14 py-[13px] justify-center items-center text-[18px] font-extrabold bg-[#9538E2] text-white"}>Wishlist</NavLink>
                </div>
            </div>
            <Outlet
                context={{
                    cartItems: cartItems,
                    setCartItems: setCartItems,
                    wishlist: wishlist,
                }}>
            </Outlet>
        </div>
    );
};

export default Dashboard;