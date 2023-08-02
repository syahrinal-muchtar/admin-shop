import { FC, ChangeEvent, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  LinearProgress,
  TextField,
} from "@mui/material";

import { IProduct } from "@/interfaces/iproducts";
import { Chart } from "@/components/Chart";

interface ProductListTableProps {
  className?: string;
  products: IProduct[];
  brands: string[];
  categories: string[];
  isLoading: boolean;
}

interface Filters {
  brand?: string;
  category?: string;
  price?: string;
  name?: string;
}

const priceRangeOptions = [
  {
    id: "All",
    name: "All",
  },
  {
    id: "0-500",
    name: "$ 0 - $ 500",
  },
  {
    id: "500-1000",
    name: "$ 500 - $ 1000",
  },
  {
    id: "1000-2000",
    name: "$ 1000 - $ 2000",
  },
];

const applyFilters = (products: IProduct[], filters: Filters): IProduct[] => {
  let min: number = 0;
  let max: number = 0;
  const prices = filters?.price?.split("-") ?? [];
  min = parseInt(prices[0]);
  max = parseInt(prices[1]);

  return products.filter((product) => {
    return (
      (filters.brand === product.brand || filters.brand === "All") &&
      (filters.category === product.category || filters.category === "All") &&
      ((product.price >= min && product.price <= max) ||
        filters.price === "All") &&
      (product.title.toLowerCase().match(filters.name) || filters.name === "")
    );
  });
};

const applyPagination = (
  products: IProduct[],
  page: number,
  limit: number
): IProduct[] => {
  return products.slice(page * limit, page * limit + limit);
};

const ProductListTable: FC<ProductListTableProps> = ({
  products,
  brands,
  categories,
  isLoading,
}) => {
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    brand: "All",
    category: "All",
    price: "All",
    name: "",
  });

  useEffect(() => {
    const savedFilter = localStorage.getItem("filterProducts");
    if (savedFilter) {
      setFilters(JSON.parse(savedFilter));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("filterProducts", JSON.stringify(filters));
  }, [filters]);

  const handleStatusChange = (value: any, fieldName: string): void => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [fieldName]: value,
    }));
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPage(0);
    setLimit(parseInt(event.target.value));
  };

  const filteredProducts = applyFilters(products, filters);
  const paginatedProducts = applyPagination(filteredProducts, page, limit);

  const getItemPerBrand = () => {
    let result: any[] = [];
    brands.map((brand) => {
      result.push(products.filter((product) => product.brand === brand).length);
    });
    return result;
  };

  return (
    <Card>
      <FormControl sx={{ m: 2, minWidth: 120 }} variant="outlined">
        <InputLabel>Brand</InputLabel>
        <Select
          value={filters.brand || "All"}
          onChange={(e) => handleStatusChange(e.target.value, "brand")}
          label="Brand"
          autoWidth
          disabled={isLoading}
        >
          <MenuItem key={"All"} value={"All"}>
            All
          </MenuItem>
          {brands.map((brand) => (
            <MenuItem key={brand} value={brand}>
              {brand}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 2, minWidth: 120 }} variant="outlined">
        <InputLabel>Category</InputLabel>
        <Select
          value={filters.category || "All"}
          onChange={(e) => handleStatusChange(e.target.value, "category")}
          label="Category"
          autoWidth
          disabled={isLoading}
        >
          <MenuItem key={"All"} value={"All"}>
            All
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 2, minWidth: 120, width: 160 }} variant="outlined">
        <InputLabel>Price</InputLabel>
        <Select
          value={filters.price || "All"}
          onChange={(e) => handleStatusChange(e.target.value, "price")}
          label="Price"
          autoWidth
          disabled={isLoading}
        >
          {priceRangeOptions.map((priceRange) => (
            <MenuItem key={priceRange.id} value={priceRange.id}>
              {priceRange.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 2, minWidth: 120, width: 200 }} variant="outlined">
        <TextField
          id="outlined-search"
          label="Search Product"
          type="search"
          value={filters.name}
          disabled={isLoading}
          onChange={(e) => handleStatusChange(e.target.value, "name")}
        />
      </FormControl>
      <Divider />
      {isLoading ? (
        <LinearProgress />
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Category</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Stock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedProducts.map((product) => {
                return (
                  <TableRow hover key={product.id}>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {product.title}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {product.brand}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {product.category}
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
                        $ {product.price}
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
                        {product.stock}
                      </Typography>
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
          count={filteredProducts.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
      <Chart
        options={{
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: brands,
          },
        }}
        series={[
          {
            name: "Total item",
            data: getItemPerBrand(),
          },
        ]}
        type="bar"
        width="95%"
        height="500px"
      />
    </Card>
  );
};

ProductListTable.propTypes = {
  products: PropTypes.array.isRequired,
};

ProductListTable.defaultProps = {
  products: [],
};

export default ProductListTable;
