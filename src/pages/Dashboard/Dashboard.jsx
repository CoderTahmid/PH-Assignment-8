import { useEffect } from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";

const Dashboard = () => {

    const { navbarColorChanging, cartItems, setCartItems, wishlist, setWishlist } = useOutletContext();

    useEffect(() => {
        navbarColorChanging(true);
        document.title = "Dashboard | Gadget Heaven"
        return () => navbarColorChanging(false);
    }, [navbarColorChanging]);

    return (
        <div>
            <div className="bg-[#9538E2] z-0 py-6 md:py-8 lg:py-[32px] space-y-4 md:space-y-6 lg:space-y-[24px]">
                <h1 className="text-white font-bold text-xl md:text-2xl lg:text-[32px] text-center">Dashboard</h1>
                <p className="text-white text-center w-full md:w-[85%] lg:w-[70%] mx-auto text-sm md:text-base lg:text-lg">Track Your Favorites, Purchases & Spending at a Glance</p>
                <div className="flex flex-row justify-center items-center gap-4 md:gap-6 text-center">
                    <NavLink to="/dashboard/cart" className={({ isActive }) => isActive ? "btn border shadow-none rounded-4xl px-6 md:px-14 py-2 md:py-[13px] justify-center items-center text-base md:text-[18px] font-extrabold bg-white text-[#9538E2]" : "btn border shadow-none rounded-4xl px-6 md:px-14 py-2 md:py-[13px] justify-center items-center text-base md:text-[18px] font-extrabold bg-[#9538E2] text-white"}>Cart</NavLink>
                    <NavLink to="/dashboard/wishlist" className={({ isActive }) => isActive ? "btn border shadow-none rounded-4xl px-6 md:px-14 py-2 md:py-[13px] justify-center items-center text-base md:text-[18px] font-extrabold bg-white text-[#9538E2]" : "btn border shadow-none rounded-4xl px-6 md:px-14 py-2 md:py-[13px] justify-center items-center text-base md:text-[18px] font-extrabold bg-[#9538E2] text-white"}>Wishlist</NavLink>
                </div>
            </div>
            <Outlet
                context={{
                    cartItems: cartItems,
                    setCartItems: setCartItems,
                    wishlist: wishlist,
                    setWishlist: setWishlist
                }}>
            </Outlet>
        </div>
    );
};

export default Dashboard;