import React from "react";
import CartsIndex from "@/containers/cart/cartList";
import SidebarLayout from "@/layouts/SidebarLayout";

function ApplicationsProducts() {
  return <CartsIndex />;
}

ApplicationsProducts.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ApplicationsProducts;
