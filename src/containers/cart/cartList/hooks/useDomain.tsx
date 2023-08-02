import { useState } from "react";
import useRepository from "./useRepository";
import { IDataCarts } from "@/interfaces/icarts";

export default function useDomain() {
  const [carts, setCarts] = useState<IDataCarts>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const repository = useRepository({
    setCarts,
    setIsLoading,
  });

  return {
    carts,
    isLoading,
    repository,
  };
}
