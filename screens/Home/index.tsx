import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  View,
} from "react-native";
import { IProduct, OrderBy } from "../../types";
import { ProductCard } from "@components/ProductCard";
import styles from "./styles";
import { ToggleButton } from "ui/ToggleButton";
import useFetchProducts from "hooks/useFetchProducts";
import useSortProducts from "hooks/useSortProducts";

const HomeScreen: React.FC = () => {
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [orderBy, setOrderBy] = useState<OrderBy>("ASC");
  const [sortBy, setSortBy] = useState<string>("");
  const { products, loading, page, setPage } = useFetchProducts();
  const { sortedProducts } = useSortProducts(
    products,
    isSorting ? "category" : "",
    orderBy,
  );
  return (
    <View style={styles.container}>
      <ToggleButton
        title="Sort by Category"
        icon={orderBy === "ASC" ? "down" : "up"}
        status={isSorting}
        setStatus={setIsSorting}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
      />
      <FlatList
        data={sortedProducts}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          if (!loading) setPage(page + 1);
        }}
        ListFooterComponent={() =>
          loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
        renderItem={({ item }: ListRenderItemInfo<IProduct>) => (
          <ProductCard productInfo={item} />
        )}
      />
    </View>
  );
};
export default HomeScreen;
