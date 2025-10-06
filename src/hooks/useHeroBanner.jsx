// src/hooks/useHeroBanner.js
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const useHeroBanner=()=> {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get("/heroBanner")
      .then(res => setBanner(res.data))
      .finally(() => setLoading(false));
  }, []);

  return { banner, loading };
}
export default useHeroBanner;