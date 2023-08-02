import { useState } from "react";
import useRepository from "./useRepository";
import { IDataProducts } from "@/interfaces/iproducts";

export default function useDomain() {
  const [product, setProduct] = useState<IDataProducts>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const repository = useRepository({
    setProduct,
    setIsLoading,
  });

  return {
    product,
    isLoading,
    repository,
  };
}
