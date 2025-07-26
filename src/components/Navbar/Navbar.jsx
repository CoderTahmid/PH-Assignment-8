import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ navbarBgColor }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={navbarBgColor + " flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0 lg:h-[80px] lg:items-center"}>
            <div className="flex items-center justify-between w-full lg:w-auto">
                <NavLink to="/" className="font-bold text-lg lg:text-xl">Gadget Heaven</NavLink>
                <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
                    <FiMenu size={28} />
                </button>
            </div>
            {/* Navigation Links */}
            <div className={`flex-col lg:flex-row flex gap-4 lg:gap-[48px] lg:flex ${menuOpen ? 'flex' : 'hidden'} lg:!flex w-full lg:w-auto bg-white lg:bg-transparent rounded-xl lg:rounded-none p-4 lg:p-0 shadow lg:shadow-none z-50 lg:z-auto lg:items-center lg:justify-center`}>
                <NavLink to="/" className={({ isActive }) => `${menuOpen ? 'text-black' : ''} ${isActive ? 'underline font-bold' : ''}`}><p>Home</p></NavLink>
                <NavLink to="/statistics" className={({isActive}) => `${menuOpen ? 'text-black' : ''} ${isActive ? 'text-[#9538E2] font-bold' : ''}`}><p>Statistics</p></NavLink>
                <NavLink to="/dashboard/cart" className={({isActive}) => `${menuOpen ? 'text-black' : ''} ${isActive ? 'text-[#9538E2] font-bold' : ''}`}><p>Dashboard</p></NavLink>
                <NavLink to="/find-us" className={({isActive}) => `${menuOpen ? 'text-black' : ''} ${isActive ? 'text-[#9538E2] font-bold' : ''}`}>Find us</NavLink>
                <div className='flex gap-4 text-black mt-4 lg:mt-0'>
                    <NavLink to="/dashboard/cart" className='bg-white rounded-full flex justify-center items-center p-2 border border-[#0B0B0B1A]'><AiOutlineShoppingCart /></NavLink>
                    <NavLink to="/dashboard/wishlist" className='bg-white rounded-full flex justify-center items-center p-2 border border-[#0B0B0B1A]'><FaRegHeart /></NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;