import { useOutletContext } from "react-router-dom";
import CartCard from "../CartCard/CartCard";
import { toast } from "react-toastify";

const Cart = () => {
    const { cartItems, setCartItems } = useOutletContext();

    const totalPrice = cartItems.reduce((sum, cartItem) => sum + cartItem.price, 0);

    const handleDeleteButton = (product_id) => {
        const newItemArray = cartItems.filter(cartItem => cartItem.product_id != product_id);
        setCartItems(newItemArray);
        toast.error("Item removed from cart!");
    }

    const handleSortByPrice = () => {
        const sortedItems = [...cartItems].sort((a, b) => b.price - a.price );
        setCartItems(sortedItems);
    }

    return (
        <div className="w-[87%] mx-auto mt-12">
            <div className="flex items-center justify-between mb-8">
                <p className="font-bold text-2xl">Cart</p>
                <div className="flex items-center gap-6">
                    <p className="font-bold text-2xl">Total cost: {totalPrice}</p>
                    <button onClick={handleSortByPrice} className="btn rounded-4xl bg-white text-[18px] font-semibold text-[#9538E2] border-2 border-[#9538E2]">Sort by price</button>
                    <button className="btn rounded-4xl text-[18px] font-semibold text-white bg-[#9538E2]">Purchase</button>
                </div>
            </div>
            <div className="space-y-6">
                {
                    cartItems.map((cartItem, idx) => <CartCard key={idx} handleDeleteButton={handleDeleteButton} setCartItems={setCartItems} cartItem={cartItem} ></CartCard>)
                }
            </div>
        </div>
    );
};

export default Cart;