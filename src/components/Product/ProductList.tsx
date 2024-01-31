import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { IProducts } from "../../types/productTypes";
import { theme } from "../../themes/main_theme";
import { ReusableCard } from "..";

const ProductList: React.FC<IProducts> = (props) => {
  const { products } = props;

  return (
    <Box>
      <Grid
        container
        flexGrow={1}
        spacing={
          useMediaQuery(theme.breakpoints.down("sm")) ? 2 : 3
        }
      >
        {products.map((product) => (
          <Grid key={product.id} item xs={6} md={4} lg={3}>
            <ReusableCard
              img={product.thumbnail}
              price={product.price}
              rating={product.rating}
              name={product.title}
              detail={product.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
