import { useMemo } from "react";
import { IProduct, OrderBy } from "types";

const useSortProducts = (
  products: IProduct[],
  sortBy: string,
  orderBy: OrderBy,
) => {
  const sortedProducts = useMemo(() => {
    return !!sortBy
      ? [...products].sort((a, b) =>
          orderBy === "ASC"
            ? String(a[sortBy]).localeCompare(b[sortBy])
            : String(b[sortBy]).localeCompare(a[sortBy]),
        )
      : [...products];
  }, [sortBy, orderBy, products]);
  return { sortedProducts };
};

export default useSortProducts;
