import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import mohammadpur from "../../assets/mohammadpur.jpg"
import dhanmondi from "../../assets/dhanmondi.jpg"
import banani from '../../assets/banani.jpg';

const FindUs = () => {

    const { navbarColorChanging } = useOutletContext();

    useEffect(() => {
        navbarColorChanging(true);

        return () => navbarColorChanging(true);
    }, [navbarColorChanging]);

    return (
        <div>
            <div className="bg-[#9538E2] z-0 py-[32px] space-y-[24px]">
                <h1 className="text-white font-bold text-[32px] text-center">Find us anywhere</h1>
                <p className="text-white text-center w-[70%] mx-auto">Locate our stores and experience the latest tech in person</p>
            </div>

            {/* Mohammadpur  */}
            <div className="w-[90%] mx-auto mt-12 flex gap-6">
                <div className="flex bg-[#9538e26b] rounded-2xl">
                    <div className="p-5 space-y-4 flex flex-col justify-center">
                        <h1 className="font-semibold text-2xl">Find us in Mohammadpur</h1>
                        <p className="text-[#09080F99]">Our Mohammadpur location is 12/6 Shalimullah Road</p>
                    </div>
                </div>
                <div className="flex bg-[#9538e26b] rounded-2xl">
                    <img src={mohammadpur} alt="" className="w-1/5 rounded-tl-2xl rounded-bl-2xl" />
                    <div className="p-5 space-y-4 flex flex-col justify-center">
                        <h1 className="font-semibold text-2xl">Services available at our Mohammadpur outlet</h1>
                        <p className="text-[#09080F99]">Exclusive car detailing with ceramic coating and vintage car restoration services</p>
                    </div>
                </div>
            </div>

            {/* Dhanmondi  */}
            <div className="w-[90%] mx-auto mt-12 flex gap-6 flex-row-reverse">
                <div className="flex bg-[#9538e26b] rounded-2xl">
                    <div className="p-5 space-y-4 flex flex-col justify-center">
                        <h1 className="font-semibold text-2xl">Find us in Dhanmondi</h1>
                        <p className="text-[#09080F99]">Our Dhanmondi location is 27/3 Mina Road</p>
                    </div>
                </div>
                <div className="flex bg-[#9538e26b] rounded-2xl">
                    <img src={dhanmondi} alt="" className="w-1/5 rounded-tl-2xl rounded-bl-2xl" />
                    <div className="p-5 space-y-4 flex flex-col justify-center">
                        <h1 className="font-semibold text-2xl">Services available at our Dhanmondi outlet</h1>
                        <p className="text-[#09080F99]">Premium bike servicing and custom paint jobs for motorcycles only</p>
                    </div>
                </div>
            </div>

            {/* Banani  */}
            <div className="w-[90%] mx-auto mt-12 flex gap-6">
                <div className="flex bg-[#9538e26b] rounded-2xl">
                    <div className="p-5 space-y-4 flex flex-col justify-center">
                        <h1 className="font-semibold text-2xl">Find us in Banani</h1>
                        <p className="text-[#09080F99]">Our Banani location is 14/10 Samsu Road</p>
                    </div>
                </div>
                <div className="flex bg-[#9538e26b] rounded-2xl">
                    <img src={banani} alt="" className="w-1/5 rounded-tl-2xl rounded-bl-2xl" />
                    <div className="p-5 space-y-4 flex flex-col justify-center">
                        <h1 className="font-semibold text-2xl">Services available at our Banani outlet</h1>
                        <p className="text-[#09080F99]">Luxury interior upholstery and personalized sound system installations</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindUs;