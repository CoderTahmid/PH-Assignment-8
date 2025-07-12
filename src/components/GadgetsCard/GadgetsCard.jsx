import { Link } from "react-router-dom";

const GadgetsCard = ({ data }) => {

    const { product_id, product_title, price, product_image } = data;

    return (
        <div className="w-[1/3] border border-gray-200 rounded-2xl p-5">
            <div
                className="mb-6 w-full h-[181px] rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${product_image})` }}>
            </div>
            <h4 className="font-semibold text-2xl mb-3">{product_title}</h4>
            <p className="text-[20px] text-[#09080F99] mb-4">Price: {price} $</p>
            <Link to={`/products-details/${product_id}`}>
                <button
                    className="btn btn-outline btn-secondary rounded-4xl border border-[#9538E2] text-[#9538E2] hover:bg-[#9538E2] shadow-none hover:text-white">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default GadgetsCard;