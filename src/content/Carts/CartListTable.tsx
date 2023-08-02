import { FC, ChangeEvent, useState } from "react";
import PropTypes from "prop-types";
import {
  Divider,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Typography,
  LinearProgress,
  Tooltip,
  IconButton,
  useTheme,
} from "@mui/material";
import LaunchTwoToneIcon from "@mui/icons-material/LaunchTwoTone";

import { ICart } from "@/interfaces/icarts";

interface CartListTableProps {
  className?: string;
  carts: ICart[];
  isLoading: boolean;
}

const applyPagination = (
  carts: ICart[],
  page: number,
  limit: number
): ICart[] => {
  return carts.slice(page * limit, page * limit + limit);
};

const CartListTable: FC<CartListTableProps> = ({ carts, isLoading }) => {
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPage(0);
    setLimit(parseInt(event.target.value));
  };

  const paginatedCarts = applyPagination(carts, page, limit);

  const theme = useTheme();
  return (
    <Card>
      <Divider />
      {isLoading ? (
        <LinearProgress />
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Total Product</TableCell>
                <TableCell align="right">Total Quantity</TableCell>
                <TableCell align="right">Total Discount</TableCell>
                <TableCell align="right">Subtotal</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedCarts.map((cart) => {
                return (
                  <TableRow hover key={cart.id}>
                    <TableCell align="right">
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {cart.id}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {cart.totalProducts}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {cart.totalQuantity}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        $ {cart.discountedTotal}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        $ {cart.total}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Show Cart" arrow>
                        <IconButton
                          sx={{
                            "&:hover": {
                              background: theme.colors.primary.lighter,
                            },
                            color: theme.palette.primary.main,
                          }}
                          color="inherit"
                          size="small"
                        >
                          <LaunchTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Box p={2}>
        <TablePagination
          component="div"
          count={carts.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

CartListTable.propTypes = {
  carts: PropTypes.array.isRequired,
};

CartListTable.defaultProps = {
  carts: [],
};

export default CartListTable;
