import { useNavigate, useOutletContext } from "react-router-dom";
import CartCard from "../CartCard/CartCard";
import { toast } from "react-toastify";
import modalImg from "../../assets/Group.png"

const Cart = () => {
    const { cartItems, setCartItems } = useOutletContext();
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((sum, cartItem) => sum + cartItem.price, 0);

    const handleDeleteButton = (product_id) => {
        const newItemArray = cartItems.filter(cartItem => cartItem.product_id != product_id);
        setCartItems(newItemArray);
        toast.error("Item removed from cart!");
    }

    const handleSortByPrice = () => {
        const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
        setCartItems(sortedItems);
    }

    const handleCloseBtnFromModal = () => {
        setCartItems([]);
        navigate("/")
    }

    return (
        <div className="w-[87%] mx-auto mt-12">
            <div className="flex flex-col sm:flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 md:gap-0">
                <p className="font-bold text-2xl">Cart</p>
                <div className="flex flex-col sm:flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full md:w-auto">
                    <p className="font-bold text-2xl">Total cost: {totalPrice}</p>
                    <div className="flex gap-2 md:gap-6">
                        <button onClick={handleSortByPrice} className="btn rounded-4xl bg-white text-[18px] font-semibold text-[#9538E2] border-2 border-[#9538E2]">Sort by price</button>
                        <button disabled={cartItems.length == 0 ? true : false} onClick={() => document.getElementById('my_modal_5').showModal()} className="btn rounded-4xl text-[18px] font-semibold text-white bg-[#9538E2]">Purchase</button>
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                {
                    cartItems.map((cartItem, idx) => <CartCard key={idx} handleDeleteButton={handleDeleteButton} setCartItems={setCartItems} cartItem={cartItem} ></CartCard>)
                }
            </div>

            {/* Modal design  */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex justify-center items-center flex-col">
                    <img src={modalImg} alt="" />
                    <h3 className="font-bold text-2xl mt-6">Payment Successfully</h3>
                    <div className="divider my-3"></div>
                    <p className="text-[#09080F99]">Thanks for purchasing</p>
                    <p className="text-[#09080F99]">Total price: {totalPrice}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={handleCloseBtnFromModal} className="btn rounded-2xl">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;