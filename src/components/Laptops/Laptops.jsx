import { useLoaderData } from "react-router-dom";
import GadgetsCard from "../GadgetsCard/GadgetsCard";

const Laptops = () => {

    const AllData  = useLoaderData();
    return (
        <div className="w-[70%] grid grid-cols-3 gap-6">
            {
                AllData.map(data => data.category === "Laptops" ? <GadgetsCard key={data.product_id} data={data}></GadgetsCard> : "")
            }
        </div>
    );
};

export default Laptops;