import { useLoaderData } from "react-router-dom";
import GadgetsCard from "../GadgetsCard/GadgetsCard";

const Drones = () => {

    const AllData  = useLoaderData();

    return (
        <div className="w-[70%] grid grid-cols-3 gap-6">
            {
                AllData.map(data => data.category === "Drones" ? <GadgetsCard key={data.product_id} data={data}></GadgetsCard> : console.log("object"))
            }
        </div>
    );
};

export default Drones;