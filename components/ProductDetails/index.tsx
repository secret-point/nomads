import React, { Dispatch, SetStateAction } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { IProduct } from "types";
import styles from "./styles";
import { PriceItem } from "@components/PriceItem";

interface IProductDetailsProps {
  productInfo: IProduct;
  showDetails: boolean;
  setShowDetails: Dispatch<SetStateAction<boolean>>;
}

export const ProductDetails: React.FC<IProductDetailsProps> = ({
  productInfo,
  showDetails,
  setShowDetails,
}) => {
  const { id, category, price, description } = productInfo;
  return (
    <View style={styles.details}>
      <View style={styles.header}>
        <PriceItem price={price} />
        <Text style={styles.category}>{category}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity onPress={() => setShowDetails(false)}>
        <Text style={styles.hideButton}>{showDetails ? "-" : "+"}</Text>
      </TouchableOpacity>
    </View>
  );
};
