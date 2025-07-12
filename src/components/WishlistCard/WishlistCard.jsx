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
                        <button onClick={handleAddToCart} className="btn border-none bg-[#9538E2] rounded-4xl text-white font-bold text-[18px]">Add to cart<MdOutlineShoppingCart /></button>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <button onClick={() => handleWishlistDeleteBtn(product_id)} className="btn btn-block my-auto p-[30px] text-3xl text-red-400"><IoTrashBinSharp></IoTrashBinSharp></button>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;