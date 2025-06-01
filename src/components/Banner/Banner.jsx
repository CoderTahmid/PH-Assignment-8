import bannerImg from "../../assets/banner.jpg"

const Banner = () => {
    return (
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;