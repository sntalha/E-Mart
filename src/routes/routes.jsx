import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "../pages/NotFound";
import { Loader } from "../components/Loader";

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Products = lazy(() => import("../pages/Products"));
const ProductInfo = lazy(() => import("../pages/ProductInfo"));
const Checkout = lazy(() => import("../pages/Checkout"));

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<Loader />}><Home /></Suspense>
    },
    {
        path: '/login',
        element: <Suspense fallback={<Loader />}><Login /></Suspense>   
    },
    {
        path: '/signup',
        element: <Suspense fallback={<Loader />}><SignUp /></Suspense>
    },
    {
        path: '/products',
        element: <Suspense fallback={<Loader />}><Products /></Suspense>
    },
    {
        path: '/product-info',
        element: <Suspense fallback={<Loader />}><ProductInfo /></Suspense>
    },
    {
        path: '*',
        element: <Suspense fallback={<Loader />}><NotFound /></Suspense>
    }
]);

export const privateRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<Loader />}><Home /></Suspense>
    },
    {
        path: '/products',
        element: <Suspense fallback={<Loader />}><Products /></Suspense>
    },
    {
        path: '/product-info',
        element: <Suspense fallback={<Loader />}><ProductInfo /></Suspense>
    },
    {
        path: '/checkout',
        element: <Suspense fallback={<Loader />}><Checkout /></Suspense>
    },
        {
        path: '*',
        element: <Suspense fallback={<Loader />}><NotFound /></Suspense>
    }
]);