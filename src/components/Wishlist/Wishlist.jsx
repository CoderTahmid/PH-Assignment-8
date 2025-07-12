import { useOutletContext } from "react-router-dom";
import WishlistCard from "../WishlistCard/WishlistCard";

const Wishlist = () => {

    const { wishlist } = useOutletContext();

    return (
        <div className="w-[87%] mx-auto mt-12">
            <p className="text-2xl font-bold mb-8">Wishlist</p>
            <div className="space-y-6">
                {
                    wishlist.map((wishlistItem, idx) => <WishlistCard key={idx} wishlistItem={wishlistItem}></WishlistCard>)
                }
            </div>
        </div>
    );
};

export default Wishlist;