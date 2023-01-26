import { createBrowserRouter } from "react-router-dom";
import DetailPage from "../Components/HomeComponents/TrendingProduct/DetailPage";
import AddPage from "../Pages/AddPage";
import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/products/:id",
        element: <DetailPage />,
    },
    {
        path: "/addpage",
        element: <AddPage />,
    },
]);

export { router }