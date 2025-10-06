// src/hooks/useProducts.js

import { useEffect, useState } from "react";
import ProductsAPI from "../api/ProductsAPI";

/**
 * Custom hook to fetch products data.
 * Can fetch either:
 * 1. All products (when no id is provided)
 * 2. Single product details (when an id is provided)
 *
 * @param {number | null} id - Optional product id to fetch a single product
 * @returns {object} { data, loading, error }
 *   - data: array of products or single product object
 *   - loading: boolean indicating if data is being fetched
 *   - error: error object if API call fails
 */
const useProducts = (id = null) => {
    // State to store fetched data
    // If id is provided (fetching single product), start with null
    // Otherwise (fetching all products), start with empty array
    const [data, setData] = useState(id ? null : []);

    // Loading state to indicate if data is being fetched
    const [loading, setLoading] = useState(true);

    // Error state to store any errors from the API call
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // Flag to prevent setting state after unmount

        // Async function to fetch data from API
        const fetchData = async () => {
            try {
                // Decide API call based on id presence
                const res = id
                    ? await ProductsAPI.getById(id) // Fetch single product
                    : await ProductsAPI.getAll();   // Fetch all products

                // Only update state if component is still mounted
                if (isMounted) {
                    setData(res.data); // Store fetched data
                    setLoading(false); // Turn off loading
                }
            } catch (err) {
                // Handle errors
                if (isMounted) {
                    setError(err);     // Store error
                    setLoading(false); // Turn off loading
                }
            }
        };

        fetchData(); // Call the async function

        // Cleanup function to prevent memory leaks
        return () => {
            isMounted = false;
        };
    }, [id]); // Dependency array: refetch when id changes

    // Return the data, loading, and error states
    return { data, loading, error };
}

export default useProducts;