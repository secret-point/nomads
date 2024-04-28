import { useState, useEffect } from "react";
import { IProduct } from "types";
import axiosInstance from "@core/axios";

const useFetchProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const fetchProducts = async () => {
    if (loading) return;
    setLoading(true);
    const response = await axiosInstance.get(`/products?limit=5&page=${page}`);
    const newProducts = response.data.map((product: IProduct) => ({
      ...product,
      showDetails: false,
    }));
    setProducts([...products, ...newProducts]);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);
  return { products, loading, page, setPage };
};

export default useFetchProducts;
