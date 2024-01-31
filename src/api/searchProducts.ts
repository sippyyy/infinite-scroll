import { IProducts } from "../types/productTypes";
import http from "../utils/http";

export const searchProducts = (skip?: number, q?: string) =>
  http.get<IProducts>("products/search", {
    params: {
      limit: 20,
      skip: skip ? skip : 0,
      q: q,
    },
  });
