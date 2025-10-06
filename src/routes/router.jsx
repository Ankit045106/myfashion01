// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import Layout from "../components/Layout";
import Shop from "../pages/Shop";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
// const Products = lazy(() => import("../pages/Products"));
// const ProductDetails = lazy(() => import("../pages/ProductDetails"));
// const NotFound = lazy(() => import("../pages/NotFound"));


// Create router with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      // {
      //     path: "/products",
      //     element: (
      //       <Suspense fallback={<Loader />}>
      //         <Products />
      //       </Suspense>
      //     ),
      //   },
      //   {
      //     path: "/products/:id",
      //     element: (
      //       <Suspense fallback={<Loader />}>
      //         <ProductDetails />
      //       </Suspense>
      //     ),
      //   },
      //   {
      //     path: "*", // wildcard route for 404
      //     element: (
      //       <Suspense fallback={<Loader />}>
      //         <NotFound />
      //       </Suspense>
      //     ),
      //   },
      {
        path: "/shop",
        element: (
          <Suspense fallback={<Loader />}>
            <Shop />
          </Suspense>
        ),
      },
    ]
  },
]);

export default router;
