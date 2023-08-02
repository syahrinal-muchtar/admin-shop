import { useState } from "react";
import useRepository from "./useRepository";
import { IDataCarts } from "@/interfaces/icarts";

// const initialStateLoding = {
//   mainBanner: true,
//   menuGrid: true,
//   cartArrival: true,
//   newestPromo: true,
//   businessSolution: true,
//   cartCategory: true,
// };

export default function useDomain() {
  const [carts, setCarts] = useState<IDataCarts[]>([]);
  // const [cart, setCart] = useState<IDataCarts>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const setIsLoadingHomePage = (key:string, value: boolean) => {
  //   setLoader(prevState => ({...prevState, [key]: value}))
  // };

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
