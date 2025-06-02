import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className='bg-[#9538E2] m-[30px] mb-0 rounded-tl-4xl rounded-tr-4xl p-6 justify-between flex items-center'>
            <NavLink to="/"><p className='text-white font-bold'>Gadget Heaven</p></NavLink>
            <div className='flex text-white gap-[48px]'>
                <NavLink to="/" className={({ isActive}) => isActive ? "underline font-bold" : ""}><p>Home</p></NavLink>
                <NavLink to="/statistics"><p>Statistics</p></NavLink>
                <NavLink to="/dashboard"><p>Dashboard</p></NavLink>
            </div>
            <div className='flex gap-4'>
                <div className='bg-white rounded-full flex justify-center items-center p-2'><AiOutlineShoppingCart /></div>
                <div className='bg-white rounded-full flex justify-center items-center p-2'><FaRegHeart/></div>
            </div>
        </div>
    );
};

export default Navbar;