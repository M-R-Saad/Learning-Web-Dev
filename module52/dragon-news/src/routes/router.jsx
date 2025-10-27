import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";

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
        ],
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: Login,
            },
            {
                path: "register",
                Component: Register,
            }
        ],
    },
    {
        path: "/news-details/:id",
        Component: NewsDetails,
        loader: () => fetch("/news.json"),
    },
    {
        path: "/*",
        Component: ErrorPage,
    }
]);

export default router;