import { useLoaderData } from "react-router-dom";
import GadgetsCard from "../GadgetsCard/GadgetsCard";

const AllCategoryGadgets = () => {

    const AllData = useLoaderData();
    // AllData.map(data => console.log(data.product_title));

    return (
        <div className="w-[70%] grid grid-cols-3 gap-6">
            {
                AllData.map(data => <GadgetsCard data={data}></GadgetsCard>)
            }
        </div>
    );
};

export default AllCategoryGadgets;