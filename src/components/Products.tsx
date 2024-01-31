import { Box, CircularProgress, Container, Typography } from "@mui/material";
import React from "react";
import { useInfiniteQuery } from "react-query";
import { getProducts } from "../api/getProducts";
import { useInView } from "react-intersection-observer";
import { useDebounce, useUpdateEffect } from "ahooks";
import { useSearchValue } from "../context/searchContext";
import { searchProducts } from "../api/searchProducts";
import { CategoryName,ProductList } from ".";

const Products: React.FC = () => {
  const { ref, inView } = useInView();
  const { search } = useSearchValue();
  const debouncedSearch = useDebounce(search, { wait: 700 });
  const { data, fetchNextPage, hasNextPage, isFetching, refetch } =
    useInfiniteQuery(
      ["products_list", debouncedSearch],
      ({ pageParam }) => {
        console.log("recall");
        if (search) {
          return searchProducts(pageParam, search);
        } else {
          return getProducts(pageParam);
        }
      },
      {
        getNextPageParam: (lastPage) => {
          try {
            if (
              lastPage.data.skip !== undefined &&
              lastPage.data.total !== undefined
            ) {
              if (lastPage.data.skip + 20 < lastPage.data.total) {
                return lastPage.data.skip + 20;
              }
            }
          } catch (error) {
            console.error("Error in getNextPageParam:", error);
          }
          return undefined;
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      }
    );

  useUpdateEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  useUpdateEffect(() => {
    console.log("call here");
    refetch();
  }, [debouncedSearch]);

  return (
    <Box>
      <Container maxWidth="xl">
        <Box sx={{ marginY: 2 }}>
          <CategoryName title="Our Products" />
        </Box>
        {data?.pages.map((item, index) => (
          <ProductList key={index} products={item.data.products} />
        ))}
        <Box
          ref={ref}
          padding={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isFetching ? (
            <CircularProgress color="secondary" sx={{ marginRight: 4 }} />
          ) : null}

          <Typography variant="body1">
            {isFetching
              ? "Loading new products..."
              : hasNextPage
              ? ""
              : "No more product"}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Products;
