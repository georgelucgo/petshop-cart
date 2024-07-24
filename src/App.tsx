import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Layout } from "./layout";
import { Detail } from "./pages/detail";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/detail/:id',
                element: <Detail/>
            }
        ]
    }
])

export {router};