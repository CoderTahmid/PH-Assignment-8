import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const { navbarColorChanging, allData } = useOutletContext();

    const data = allData;

    useEffect(() => {
        navbarColorChanging(true);
        document.title = "Statistics | Gadget Heaven"

        return () => navbarColorChanging(true);
    }, [navbarColorChanging]);

    return (
        <div>
            
            <div className="bg-[#9538E2] z-0 py-6 md:py-8 lg:py-[32px] space-y-4 md:space-y-6 lg:space-y-[24px]">
                <h1 className="text-white font-bold text-xl md:text-2xl lg:text-[32px] text-center">Statistics</h1>
                <p className="text-white text-center w-full md:w-[85%] lg:w-[70%] mx-auto text-sm md:text-base lg:text-lg">Track gadget pricing trends and compare product values at a glance</p>
            </div>

            <div className="w-[90%] mx-auto text-base md:text-xl lg:text-2xl font-bold mt-8 md:mt-12 mb-4 md:mb-8">Statistics</div>

            <div className="w-[90%] max-w-[1200px] mx-auto">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data}>
                        <XAxis dataKey="product_title" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                        <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="price" fill="#8884d8" barSize={50} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Statistics;