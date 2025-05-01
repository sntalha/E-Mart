import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: HomePage
    }
]);