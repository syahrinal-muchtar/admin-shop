import { callAPIs } from "@/helpers/api";
import { IConfig } from "@/interfaces/iconfig";
import ServiceCartList from "@/containers/cart/cartList/services";
import { IDataCarts } from "@/interfaces/icarts";

interface IRepository {
  setCarts(val: IDataCarts[]): void;
  setIsLoading: (val: boolean) => void;
}

export default function useRepository({
  setCarts,
  setIsLoading,
}: IRepository) {
  const fetchCart = async (params = {}) => {
    const payload: IConfig = ServiceCartList["carts"](params);

    setIsLoading(true);
    try {
      const response: any = await callAPIs(payload);
      setCarts(response.data.data);
      setIsLoading(false);
      return response.data.data;
    } catch (error) {
      setCarts([]);
      setIsLoading(false);
    }
  };
  return {
    fetchCart,
  };
}
