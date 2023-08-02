import { useState } from "react";
import useRepository from "./useRepository";
import { IDataCarts } from "@/interfaces/icarts";

export default function useDomain() {
  const [cart, setCart] = useState<IDataCarts>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const setIsLoadingHomePage = (key:string, value: boolean) => {
  //   setLoader(prevState => ({...prevState, [key]: value}))
  // };

  const repository = useRepository({
    setCart,
    setIsLoading,
  });

  return {
    cart,
    isLoading,
    repository,
  };
}
