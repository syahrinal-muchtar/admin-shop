import { Card, Typography } from "@mui/material";
import ProductListTable from "./ProductListTable";
import { IDataProducts } from "@/interfaces/iproducts";
import { FC } from "react";

interface ProductListTableProps {
  products: IDataProducts;
  brands: string[];
  categories: string[];
  isLoading: boolean;
}

const ProductList: FC<ProductListTableProps> = ({
  products,
  brands,
  categories,
  isLoading,
}) => {
  return (
    <Card>
      <Typography variant="h3" component="h3" sx={{margin: 2}}>
        Products
      </Typography>
      <ProductListTable
        products={products?.products}
        brands={brands}
        categories={categories}
        isLoading={isLoading}
      />
    </Card>
  );
};

export default ProductList;
