import { Card, Typography } from "@mui/material";
import CartListTable from "./CartListTable";
import { IDataCarts } from "@/interfaces/icarts";
import { FC } from "react";

interface CartListTableProps {
  carts: IDataCarts;
  isLoading: boolean;
}

const CartList: FC<CartListTableProps> = ({ carts, isLoading }) => {
  return (
    <Card>
      <Typography variant="h3" component="h3" sx={{ margin: 2 }}>
        Carts
      </Typography>
      <CartListTable carts={carts?.carts} isLoading={isLoading} />
    </Card>
  );
};

export default CartList;
