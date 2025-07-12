import { IoTrashBinSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const WishlistCard = ({ wishlistItem }) => {

    const { product_title, description, price, product_image } = wishlistItem;

    const handleDeleteButton = () => {
        console.log("object");
    }

    return (
        <div>
            <div className="bg-gray-100 p-8 rounded-2xl flex justify-between">
                <div className="gap-8 flex">
                    <div
                        className="w-[150px] rounded-xl bg-center bg-cover"
                        style={{ backgroundImage: `url(${product_image})` }}>
                    </div>
                    <div className="space-y-4">
                        <p className="font-semibold text-2xl">{product_title}</p>
                        <p className="text-[#09080F99]">{description}</p>
                        <p className="font-semibold text-xl">Price: $ {price}</p>
                        <button className="btn border-none bg-[#9538E2] rounded-4xl text-white font-bold text-[18px]">Add to cart<MdOutlineShoppingCart /></button>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <button onClick={handleDeleteButton} className="btn btn-block my-auto p-[30px] text-3xl text-red-400"><IoTrashBinSharp></IoTrashBinSharp></button>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;