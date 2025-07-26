import { IoTrashBinSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";

const WishlistCard = ({ wishlistItem, handleWishlistDeleteBtn, setCartItems, cartItems }) => {

    const { product_id, product_title, description, price, product_image } = wishlistItem;

    const handleAddToCart = () => {
        const alreadyAdded = cartItems.some(cartItem => cartItem.product_id == product_id);

        if (alreadyAdded) {
            toast.warning("This is already added to cart");
            return;
        }

        setCartItems([...cartItems, { product_id, price, product_title, description, product_image }]);
        toast.success("Item added to cart!");
    }

    return (
        <div>
            <div className="bg-gray-100 p-4 md:p-8 rounded-2xl flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
                    <div
                        className="w-full md:w-[150px] h-40 md:h-auto rounded-xl bg-center bg-cover mb-4 md:mb-0"
                        style={{ backgroundImage: `url(${product_image})` }}>
                    </div>
                    <div className="space-y-2 md:space-y-4 w-full">
                        <p className="font-semibold text-lg md:text-2xl">{product_title}</p>
                        <p className="text-[#09080F99] text-sm md:text-base">{description}</p>
                        <p className="font-semibold text-base md:text-xl">Price: $ {price}</p>
                        <button onClick={handleAddToCart} className="btn border-none bg-[#9538E2] rounded-4xl text-white font-bold text-sm md:text-base lg:text-[18px]">Add to cart<MdOutlineShoppingCart /></button>
                    </div>
                </div>
                <div className="flex justify-end items-center mt-4 md:mt-0">
                    <button onClick={() => handleWishlistDeleteBtn(product_id)} className="btn btn-block p-4 md:p-[30px] text-xl md:text-3xl text-red-400"><IoTrashBinSharp /></button>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;