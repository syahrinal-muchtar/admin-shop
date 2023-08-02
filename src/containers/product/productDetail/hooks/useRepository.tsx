import { callAPIs } from "@/helpers/api";
import { IConfig } from "@/interfaces/iconfig";
import ServiceProductDetail from "../services";
import { IDataProducts } from "@/interfaces/iproducts";

interface IRepository {
  setProduct(val: IDataProducts): void;
  setIsLoading: (val: boolean) => void;
}

export default function useRepository({
  setProduct,
  setIsLoading,
}: IRepository) {
  const fetchProduct = async (id: string) => {
    const payload: IConfig = ServiceProductDetail["detailProduct"](id);

    setIsLoading(true);
    try {
      const response: any = await callAPIs(payload);
      setProduct(response.data.data);
      setIsLoading(false);
      return response.data.data;
    } catch (error) {
      setProduct(null);
      setIsLoading(false);
    }
  };
  return {
    fetchProduct,
  };
}
