import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index:true,
                Component: Home,
            },
            {
                path: "/category/:id",
                Component: CategoryNews,
                loader: () => fetch("/news.json"),
            }
        ]
    },
    {
        path: "/auth",
        element: <div>Authentication Page</div>
    },
    {
        path: "/news",
        element: <div>News Page</div>
    },
    {
        path: "/*",
        element: <div>404 Not Found</div>
    }
]);

export default router;