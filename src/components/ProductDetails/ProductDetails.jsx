import { useEffect } from 'react';
import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';

const ProductDetails = () => {

    const { navbarColorChanging } = useOutletContext();
    const { id } = useParams();
    // const allData = useLoaderData();
    // console.log(allData);

    const allData = useLoaderData();
    // console.log(allData);

    // allData.map( data => console.log(data.product_id));

    useEffect(() => {
        navbarColorChanging(true);

        return () => navbarColorChanging(false);
    }, [navbarColorChanging]);

    // console.log(id);
    // allData.map(data => data.product_id == id ? console.log("kingg") : console.log("kutt"));

    return (
        <div>
            {
                allData.map(data => data.product_id == id ? <ProductDetailsCard data={data}></ProductDetailsCard> : "")
            }
        </div>  
    );
};

export default ProductDetails;