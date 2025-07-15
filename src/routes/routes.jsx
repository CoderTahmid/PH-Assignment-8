import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../pages/Statistics/Statistics";
import Home from "../pages/Home/Home";
import AllCategoryGadgets from "../components/AllCategoryGadgets/AllCategoryGadgets";
import Laptops from "../components/Laptops/Laptops";
import Phones from "../components/Phones/Phones";
import Drones from "../components/Drones/Drones";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Dashboard from "../pages/Dashboard/Dashboard";
import Cart from "../components/Cart/Cart";
import Wishlist from "../components/Wishlist/Wishlist";
import FindUs from "../pages/FindUs/FindUs";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        loader: () => fetch("../products.json"),
        children: [
            {
                path: "/",
                element: <Home></Home>,
                children: [
                    {
                        path: "/",
                        element: <AllCategoryGadgets></AllCategoryGadgets>,
                        loader: () => fetch("../products.json")
                    },
                    {
                        path: "/laptops",
                        element: <Laptops></Laptops>,
                        loader: () => fetch("../products.json")
                    },
                    {
                        path: "/phones",
                        element: <Phones></Phones>,
                        loader: () => fetch("../products.json")
                    },
                    {
                        path: "/drones",
                        element: <Drones></Drones>,
                        loader: () => fetch("../products.json")
                    }
                ]
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/dashboard/cart",
                        element: <Cart></Cart>
                    },
                    {
                        path: "/dashboard/wishlist",
                        element: <Wishlist></Wishlist>
                    }
                ]
            },
            {
                path: "/products-details/:id",
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch("../products.json")
            },
            {
                path: "/find-us",
                element: <FindUs></FindUs>
            }
        ]
    }
])

export default routes;