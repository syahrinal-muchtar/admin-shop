import React from "react";
import ProductsIndex from "@/containers/product/products";
import SidebarLayout from "@/layouts/SidebarLayout";

function ApplicationsProducts() {
  return <ProductsIndex />;
}

ApplicationsProducts.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ApplicationsProducts;
