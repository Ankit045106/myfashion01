import axiosInstance from "./axiosInstance";

const ProductsAPI = {
  getAll: () => axiosInstance.get("/products"),
  getById: (id) => axiosInstance.get(`/products/${id}`),
  getHero: () => axiosInstance.get("/heroBanner"),
  getCTA: () => axiosInstance.get("/ctaBanners"),
  getTestimonials: () => axiosInstance.get("/testimonials"),
};

export default ProductsAPI;
