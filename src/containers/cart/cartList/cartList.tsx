import Head from "next/head";
import { Grid, Container } from "@mui/material";

import CartList from "@/content/Carts/CartList";
import { useEffect } from "react";
import useDomain from "./hooks/useDomain";

function Carts() {
  const { repository, carts, isLoading } = useDomain();
  useEffect(() => {
    repository.fetchCart();
  }, []);

  return (
    <>
      <Head>
        <title>Carts</title>
      </Head>
      <Container maxWidth="lg" sx={{ marginTop: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <CartList
              carts={carts}
              isLoading={isLoading}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Carts;
