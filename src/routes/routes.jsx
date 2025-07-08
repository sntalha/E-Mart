import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Products } from "../pages/Products";

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/products',
        element: <Products />
    }
]);