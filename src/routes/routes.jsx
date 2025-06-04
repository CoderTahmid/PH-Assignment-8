import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../pages/Statistics/Statistics";
import Home from "../pages/Home/Home";
import AllCategoryGadgets from "../components/AllCategoryGadgets/AllCategoryGadgets";
import Laptops from "../components/Laptops/Laptops";
import Phones from "../components/Phones/Phones";
import Drones from "../components/Drones/Drones";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
            }
        ]
    }
])

export default routes;