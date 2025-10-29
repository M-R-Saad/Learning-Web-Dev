import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../components/Loading";

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
                hydrateFallbackElement: <Loading></Loading>,
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
        element: <PrivateRoute>
                    <NewsDetails />
                </PrivateRoute>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
    },
    {
        path: "/*",
        Component: ErrorPage,
    }
]);

export default router;