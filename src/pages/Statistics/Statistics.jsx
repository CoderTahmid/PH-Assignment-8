import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

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
            
            <div className="bg-[#9538E2] z-0 py-[32px] space-y-[24px]">
                <h1 className="text-white font-bold text-[32px] text-center">Statistics</h1>
                <p className="text-white text-center w-[70%] mx-auto">Track gadget pricing trends and compare product values at a glance</p>
            </div>

            <div className="w-[90%] mx-auto text-2xl font-bold mt-12 mb-8">Statistics</div>

            <BarChart width={1200} height={500} data={data} className="mx-auto">
                <XAxis dataKey="product_title" stroke="#8884d8" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="price" fill="#8884d8" barSize={50} />
            </BarChart>

        </div>
    );
};

export default Statistics;