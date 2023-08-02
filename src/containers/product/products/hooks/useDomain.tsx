import { useState } from "react";
import useRepository from "./useRepository";
import { IDataProducts } from "@/interfaces/iproducts";

export default function useDomain() {
  const [products, setProducts] = useState<IDataProducts>();
  const [brands, setBrands] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const repository = useRepository({
    setProducts,
    setBrands,
    setCategories,
    setIsLoading,
  });

  return {
    products,
    brands,
    categories,
    isLoading,
    repository,
  };
}
