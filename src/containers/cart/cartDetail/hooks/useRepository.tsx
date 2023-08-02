import { callAPIs } from "@/helpers/api";
import { IConfig } from "@/interfaces/iconfig";
import ServiceCartDetail from "@/containers/cart/cartDetail/services";
import { IDataCarts } from "@/interfaces/icarts";

interface IRepository {
  setCart(val: IDataCarts): void;
  setIsLoading: (val: boolean) => void;
}

export default function useRepository({
  setCart,
  setIsLoading,
}: IRepository) {
  const fetchCart = async (id: string) => {
    const payload: IConfig = ServiceCartDetail["detailCart"](id);

    setIsLoading(true);
    try {
      const response: any = await callAPIs(payload);
      setCart(response.data.data);
      setIsLoading(false);
      return response.data.data;
    } catch (error) {
      setCart(null);
      setIsLoading(false);
    }
  };
  return {
    fetchCart,
  };
}
