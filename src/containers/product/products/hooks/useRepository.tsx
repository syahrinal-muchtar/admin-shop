import { callAPIs } from "@/helpers/api";
import { IConfig } from "@/interfaces/iconfig";
import ServiceProductList from "../services";
import { IDataProducts } from "@/interfaces/iproducts";
import { extractorArray } from "@/helpers/array";

interface IRepository {
  setProducts(val: IDataProducts): void;
  setBrands(val: string[]): void;
  setCategories(val: string[]): void;
  setIsLoading: (val: boolean) => void;
}

export default function useRepository({
  setProducts,
  setBrands,
  setCategories,
  setIsLoading,
}: IRepository) {
  const fetchProduct = async (params = {}) => {
    const payload: IConfig = ServiceProductList["products"](params);

    setIsLoading(true);
    try {
      const response: any = await callAPIs(payload);
      setProducts(response.data);
      setBrands(extractorArray(response.data.products, "brand"));
      setCategories(extractorArray(response.data.products, "category"));
    } catch (error) {
      setProducts(null);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    fetchProduct,
  };
}
