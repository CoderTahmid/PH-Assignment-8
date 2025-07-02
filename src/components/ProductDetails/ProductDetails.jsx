import { useEffect } from 'react';
import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';

const ProductDetails = () => {

    const { navbarColorChanging, cartItems, setCartItems } = useOutletContext();
    // console.log(cartItems);
    const { id } = useParams();

    const allData = useLoaderData();

    useEffect(() => {
        navbarColorChanging(true);

        return () => navbarColorChanging(false);
    }, [navbarColorChanging]);

    return (
        <div>
            {
                allData.map(data => data.product_id == id ? <ProductDetailsCard cartItems={cartItems} setCartItems={setCartItems} data={data}></ProductDetailsCard> : "")
            }
        </div>
    );
};

export default ProductDetails;