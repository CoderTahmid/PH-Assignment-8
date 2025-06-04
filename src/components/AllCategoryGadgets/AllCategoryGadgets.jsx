import { useLoaderData } from "react-router-dom";
import GadgetsCard from "../GadgetsCard/GadgetsCard";

const AllCategoryGadgets = () => {

    const AllData = useLoaderData();

    return (
        <div className="w-[70%] grid grid-cols-3 gap-6">
            {
                AllData.map(data => <GadgetsCard key={data.product_id} data={data}></GadgetsCard>)
            }
        </div>
    );
};

export default AllCategoryGadgets;