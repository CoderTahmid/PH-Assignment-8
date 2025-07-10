import { useOutletContext } from "react-router-dom";
import CartCard from "../CartCard/CartCard";

const Cart = () => {
    const { cartItems, setCartItems } = useOutletContext();

    const totalPrice = cartItems.reduce((sum, cartItem) => sum + cartItem.price, 0);

    const handleDeleteButton = (product_id) => {
        const newItemArray = cartItems.filter(cartItem => cartItem.product_id != product_id);
        setCartItems(newItemArray);
    }

    return (
        <div className="w-[87%] mx-auto mt-12">
            <div className="flex items-center justify-between mb-8">
                <p className="font-bold text-2xl">Cart</p>
                <div className="flex items-center gap-6">
                    <p className="font-bold text-2xl">Total cost: {totalPrice}</p>
                    <button className="btn rounded-4xl bg-white">Short by price</button>
                    <button className="btn rounded-4xl bg-white">Purchase</button>
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