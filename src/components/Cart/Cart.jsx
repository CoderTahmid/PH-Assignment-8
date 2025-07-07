import { useOutletContext } from "react-router-dom";

const Cart = () => {

    const { cartItems } = useOutletContext();

    // const { product_id, price, product_title, description, product_image } = cartItems;
    // console.log(product_id);

    console.log(cartItems);
    return (
        <div className="w-[87%] mx-auto mt-12">
            <div className="flex items-center justify-between">
                <p className="font-bold text-2xl">Cart</p>
                <div className="flex items-center gap-6">
                    <p className="font-bold text-2xl">total cost: </p>
                    <button className="btn rounded-4xl bg-white">Short by price</button>
                    <button className="btn rounded-4xl bg-white">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;