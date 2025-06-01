import bannerImg from "../../assets/banner.jpg"

const Banner = () => {
    return (
        // <div className='h-[200px] bg-[#9538E2] mx-[30px]'>
        //     Banner
        // </div>
        <div>
            <div className="bg-[#9538E2] z-0 py-[48px] mx-[30px] space-y-[24px]">
                <h1 className="text-white font-bold text-[56px] text-center">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="text-white text-center w-[70%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="btn btn-lg mx-auto block text-[#9538E2] rounded-4xl">Shop Now</button>
            </div>
            <div
                className="mx-[30px]"
                style={{
                    background: "linear-gradient(to top, white 70%, #9538E2 30%)",
                }}>
                <div
                    className="rounded-3xl w-[80%] mx-auto bg-opacity-50% p-6 border border-white"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                    <div
                        className="rounded-3xl h-[611px] text-white py-[68px] bg-cover bg-white flex justify-center items-center flex-col"
                        style={{ backgroundImage: `url(${bannerImg})` }}>
                        {/* <h1 className="font-bold text-black text-[32px] mb-4">Subscribe to our Newsletter</h1>
                        <p className="font-medium text-[20px] mb-6" style={{ color: "rgba(19, 19, 19, 0.7)" }}>Get the latest updates and news right in your inbox!</p>
                        <div className="grid grid-cols-3 w-[60%]">
                            <input type="text" className="border col-span-2 border-gray-200 rounded-xl text-gray-400 py-[18px] pl-[30px] mr-4" placeholder="Enter your email" />
                            <button className="border border-red-100 text-black py-[18px] px-[30px] rounded-xl bg-[#E7FE29] hover:cursor-pointer">Subscribe</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;