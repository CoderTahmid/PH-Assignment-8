import { useEffect } from 'react';
import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';

const ProductDetails = () => {

    const { navbarColorChanging, cartItems, setCartItems, wishlist, setWishlist } = useOutletContext();
    const { id } = useParams();

    const allData = useLoaderData();

    useEffect(() => {
        navbarColorChanging(true);

        return () => navbarColorChanging(false);
    }, [navbarColorChanging]);

    return (
        <div>
            {
                allData.map((data, idx) => data.product_id == id ? <ProductDetailsCard key={idx} wishlist={wishlist} setWishlist={setWishlist} cartItems={cartItems} setCartItems={setCartItems} data={data}></ProductDetailsCard> : "")
            }
        </div>
    );
};

export default ProductDetails;