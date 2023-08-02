import Head from "next/head";
import { Grid, Container } from "@mui/material";

import ProductList from "@/content/Products/ProductList";
import { useEffect } from "react";
import useDomain from "./hooks/useDomain";

function Products() {
  const { repository, products, brands, categories, isLoading } = useDomain();
  useEffect(() => {
    repository.fetchProduct();
  }, []);

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Container maxWidth="lg" sx={{marginTop: 2}}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <ProductList
              products={products}
              brands={brands}
              categories={categories}
              isLoading={isLoading}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Products;
