import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { IProduct } from "types";
import { ProductDetails } from "@components/ProductDetails";

interface IProductCardProps {
  productInfo: IProduct;
}

export const ProductCard: React.FC<IProductCardProps> = ({ productInfo }) => {
  const { image, title } = productInfo;
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <TouchableOpacity onPress={() => setShowDetails(true)}>
      <View style={styles.productCardWrapper}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        {showDetails && (
          <ProductDetails
            productInfo={productInfo}
            showDetails={showDetails}
            setShowDetails={setShowDetails}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
