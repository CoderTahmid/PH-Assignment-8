import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";


const Navbar = ({ navbarBgColor }) => {
    return (
        <div className={navbarBgColor}>
            <NavLink to="/"><p className='font-bold'>Gadget Heaven</p></NavLink>
            <div className='flex gap-[48px]'>
                <NavLink to="/" className={({ isActive }) => isActive ? "underline font-bold" : ""}><p>Home</p></NavLink>
                <NavLink to="/statistics" className={({isActive}) => isActive ? "text-[#9538E2] font-bold" : ""}><p>Statistics</p></NavLink>
                <NavLink to="/dashboard/cart" className={({isActive}) => isActive ? "text-[#9538E2] font-bold" : ""}><p>Dashboard</p></NavLink>
                <NavLink to="/find-us" className={({isActive}) => isActive ? "text-[#9538E2] font-bold" : ""}>Find us</NavLink>
            </div>
            <div className='flex gap-4 text-black'>
                <div className='bg-white rounded-full flex justify-center items-center p-2 border border-[#0B0B0B1A]'><AiOutlineShoppingCart /></div>
                <div className='bg-white rounded-full flex justify-center items-center p-2 border border-[#0B0B0B1A]'><FaRegHeart /></div>
            </div>
        </div>
    );
};
    
export default Navbar;