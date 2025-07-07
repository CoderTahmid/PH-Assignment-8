import ProductDetails from "../ProductDetails/ProductDetails";

const CartCard = ({ cartItem }) => {
    const { product_title, description, price, product_image } = cartItem;

    return (
        <div className="bg-gray-100 p-8 rounded-2xl">
            <div className="gap-8 flex">
                <div
                    className="w-[150px] rounded-xl bg-center bg-cover"
                    style={{ backgroundImage: `url(${product_image})` }}>
                </div>
                <div className="space-y-4">
                    <p className="font-semibold text-2xl">{product_title}</p>
                    <p className="text-[#09080F99]">{description}</p>
                    <p className="font-semibold text-xl">Price: $ {price}</p>
                </div>
            </div>
        </div>
    );
};

export default CartCard;