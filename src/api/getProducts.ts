import { IProducts } from "../types/productTypes";
import http from "../utils/http";

export const getProducts = (skip?: number) =>
  http.get<IProducts>("products", {
    params: {
      limit: 20,
      skip: skip ? skip : 0,
    },
  });
