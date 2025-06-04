import { NavLink, Outlet } from "react-router-dom";

const AllGadgets = () => {
    return (
        <div className="mt-[100px] w-[90%] mx-auto">
            <h1 className="text-center font-bold text-[40px] mb-12">Explore Cutting-Edge Gadgets</h1>
            <div className="flex gap-6">
                <div className="w-[30%] border h-full border-gray-200 rounded-2xl p-6 flex flex-col justify-center items-center gap-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? "w-[90%] btn btn-lg rounded-4xl bg-[#9538E2] text-white" : "w-[90%] btn btn-lg rounded-4xl text-[#09080F99]"}>
                        <button className="">All Product</button>
                    </NavLink>
                    <NavLink to="/laptops" className={({ isActive }) => isActive ? "w-[90%] btn btn-lg rounded-4xl bg-[#9538E2] text-white" : "w-[90%] btn btn-lg rounded-4xl text-[#09080F99]"}>
                        <button className="">Laptop</button>
                    </NavLink>
                    <NavLink to="/phones" className={({ isActive }) => isActive ? "w-[90%] btn btn-lg rounded-4xl bg-[#9538E2] text-white" : "w-[90%] btn btn-lg rounded-4xl text-[#09080F99]"}>
                        <button className="">Phone</button>
                    </NavLink>
                    <NavLink to="/drones" className={({ isActive }) => isActive ? "w-[90%] btn btn-lg rounded-4xl bg-[#9538E2] text-white" : "w-[90%] btn btn-lg rounded-4xl text-[#09080F99]"}>
                        <button className="">Drone</button>
                    </NavLink>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AllGadgets;