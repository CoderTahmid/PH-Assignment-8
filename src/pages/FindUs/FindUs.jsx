import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import mohammadpur from "../../assets/mohammadpur.jpg"
import dhanmondi from "../../assets/dhanmondi.jpg"
import banani from '../../assets/banani.jpg';

const FindUs = () => {

    const { navbarColorChanging } = useOutletContext();

    useEffect(() => {
        navbarColorChanging(true);
        document.title = "Find us | Gadget Heaven"
        return () => navbarColorChanging(true);
    }, [navbarColorChanging]);

    return (
        <div>
            <div className="bg-[#9538E2] z-0 py-6 md:py-8 lg:py-[32px] space-y-4 md:space-y-6 lg:space-y-[24px]">
                <h1 className="text-white font-bold text-xl md:text-2xl lg:text-[32px] text-center">Find us anywhere</h1>
                <p className="text-white text-center w-full md:w-[85%] lg:w-[70%] mx-auto text-sm md:text-base lg:text-lg">Locate our stores and experience the latest tech in person</p>
            </div>

            {/* Mohammadpur  */}
            <div className="w-[90%] mx-auto mt-12 flex md:gap-6">
                <div className="flex bg-[#9538e26b] rounded-2xl">
                    <div className="p-5 space-y-4 md:flex flex-col justify-center hidden">
                        <h1 className="font-semibold text-2xl">Find us in Mohammadpur</h1>
                        <p className="text-[#09080F99]">Our Mohammadpur location is 12/6 Shalimullah Road</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row bg-[#9538e26b] rounded-2xl w-full">
                    <img src={mohammadpur} alt="" className="w-full md:w-1/5 h-40 md:h-auto object-cover rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-tr-2xl" />
                    <div className="p-5 space-y-4 flex flex-col justify-center w-full">
                        <h1 className="font-semibold text-lg md:text-2xl">Services available at our Mohammadpur outlet</h1>
                        <p className="text-[#09080F99] text-sm md:text-base">Exclusive car detailing with ceramic coating and vintage car restoration services</p>
                    </div>
                </div>
            </div>

            {/* Dhanmondi  */}
            <div className="w-[90%] mx-auto mt-12 flex md:gap-6 flex-row-reverse">
                <div className="md:flex hidden bg-[#9538e26b] rounded-2xl">
                    <div className="p-5 space-y-4 flex flex-col justify-center">
                        <h1 className="font-semibold text-2xl">Find us in Dhanmondi</h1>
                        <p className="text-[#09080F99]">Our Dhanmondi location is 27/3 Mina Road</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row bg-[#9538e26b] rounded-2xl w-full">
                    <img src={dhanmondi} alt="" className="w-full md:w-1/5 h-40 md:h-auto object-cover rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-tr-2xl" />
                    <div className="p-5 space-y-4 flex flex-col justify-center w-full">
                        <h1 className="font-semibold text-lg md:text-2xl">Services available at our Dhanmondi outlet</h1>
                        <p className="text-[#09080F99] text-sm md:text-base">Premium bike servicing and custom paint jobs for motorcycles only</p>
                    </div>
                </div>
            </div>

            {/* Banani  */}
            <div className="w-[90%] mx-auto mt-12 flex md:gap-6">
                <div className="md:flex hidden bg-[#9538e26b] rounded-2xl">
                    <div className="p-5 space-y-4 flex flex-col justify-center">
                        <h1 className="font-semibold text-2xl">Find us in Banani</h1>
                        <p className="text-[#09080F99]">Our Banani location is 14/10 Samsu Road</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row bg-[#9538e26b] rounded-2xl w-full">
                    <img src={banani} alt="" className="w-full md:w-1/5 h-40 md:h-auto object-cover rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-tr-2xl" />
                    <div className="p-5 space-y-4 flex flex-col justify-center w-full">
                        <h1 className="font-semibold text-lg md:text-2xl">Services available at our Banani outlet</h1>
                        <p className="text-[#09080F99] text-sm md:text-base">Luxury interior upholstery and personalized sound system installations</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindUs;