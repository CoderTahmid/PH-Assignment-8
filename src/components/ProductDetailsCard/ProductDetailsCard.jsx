import { LiaStarSolid } from "react-icons/lia";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
// import { useState } from "react";

const ProductDetailsCard = ({ data, cartItems, setCartItems, wishlist, setWishlist }) => {

    const { product_id, product_image, product_title, price, availability, description, specification, rating } = data;

    const stockBtnColor = availability ? "px-[14px] py-[7px] border border-[#309C08] inline-block rounded-4xl bg-[#309C081A] text-[#309C08]" : "px-[14px] py-[7px] border border-[#9c0808] inline-block rounded-4xl bg-[#df37371a] text-[#9c0808]";

    const handleAddToCart = () => {
        const alreadyAdded = cartItems.some(cartItem => cartItem.product_id == product_id);

        if (alreadyAdded) {
            toast.warning("This is already added to cart");
            return;
        }

        setCartItems([...cartItems, { product_id, price, product_title, description, product_image }]);
        toast.success("Item added to cart!");
    }

    const handleAddToWishlist = () => {
        setWishlist([...wishlist, { product_id, product_title, description, price, product_image }]);
        toast.success("Item added to wishlist!");
    };

    const alreadyInWishlist = wishlist.some(wishlistItem => wishlistItem.product_id == product_id);

    return (
        <div>
            <div>
                <div className="bg-[#9538E2] z-0 py-[48px] space-y-[24px]">
                    <h1 className="text-white font-bold text-[32px] text-center">Product Details</h1>
                    <p className="text-white text-center w-[70%] mx-auto">Explore everything you need to know about this product — from key features to detailed specifications. Make an informed choice.</p>
                </div>
                <div className="bg-white" style={{ background: "linear-gradient(to top, white 70%, #9538E2 30%)" }}>
                    <div className="rounded-3xl w-[80%] mx-auto bg-opacity-50% p-8 bg-gray-50 flex gap-8">
                        <div
                            className="w-[40%] rounded-2xl bg-center bg-cover"
                            style={{ backgroundImage: `url(${product_image})` }}>
                        </div>
                        <div className="w-[60%] space-y-4">
                            <h1 className="font-semibold text-[28px]">{product_title}</h1>
                            <p className="font-semibold text-[20px] text-[#09080FCC]">Price: $ {price}</p>
                            <div className={stockBtnColor}>{availability ? "In stock" : "Out of stock"} </div>
                            <p className="text-[18px] text-[#09080F99]">{description}</p>
                            <p className="font-bold text-[18px]">Specification:</p>
                            <div>
                                {
                                    specification.map((point, idx) => <li key={idx} type="1" className="text-[18px] text-[#09080F99]">{point}</li>)
                                }
                            </div>
                            <p className="text-[18px] font-bold">Rating ⭐</p>
                            <div className="text-yellow-500 flex items-center">
                                <div className="flex text-2xl">
                                    <LiaStarSolid />
                                    <LiaStarSolid />
                                    <LiaStarSolid />
                                    <LiaStarSolid />
                                    <LiaStarSolid />
                                </div>
                                <div className="text-black rounded-4xl bg-[#09080F0D] px-[14px] py-[7px] ml-4">{rating}</div>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={handleAddToCart} className="btn border-none bg-[#9538E2] rounded-4xl text-white font-bold text-[18px]">Add to cart<MdOutlineShoppingCart /></button>
                                <button disabled={alreadyInWishlist} onClick={handleAddToWishlist} className='btn bg-white rounded-full flex justify-center items-center p-2 border border-[#0B0B0B1A] text-[22px]'><FaRegHeart /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsCard;