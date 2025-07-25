import { NavLink } from "react-router-dom";
import bannerImg from "../../assets/banner.jpg"

const HomeBanner = () => {
    return (
        <div className="w-[95%] mx-auto">
            <div className="bg-[#9538E2] z-0 py-[48px]  space-y-[24px]">
                <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-[56px] text-center w-[90%] mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="text-white text-center w-[70%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <NavLink to="/dashboard">
                    <button className="btn btn-lg mx-auto block text-[#9538E2] rounded-4xl">Go to dashboard</button>
                </NavLink>
            </div>
            <div
                style={{
                    background: "linear-gradient(to top, white 70%, #9538E2 30%)",
                }}>
                <div
                    className="rounded-3xl w-[80%] mx-auto bg-opacity-50% p-6 border border-white"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                    <div
                        className="rounded-xl md:rounded-2xl lg:rounded-3xl h-40 md:h-80 lg:h-[400px] text-white py-8 md:py-16 lg:py-[68px] bg-cover bg-center bg-no-repeat bg-white flex justify-center items-center flex-col"
                        style={{ backgroundImage: `url(${bannerImg})` }}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;