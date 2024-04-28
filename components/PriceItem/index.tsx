import { View, Text } from "react-native";
import styles from "./styles";

interface IPriceItemProps {
  price: number;
  currency?: string;
}

export const PriceItem: React.FC<IPriceItemProps> = ({
  price,
  currency = "USD",
}) => {
  const currencySymbols = {
    USD: "$",
    EUR: "€",
  };
  const [decimal, fraction] = price.toFixed(2).split(".");
  return (
    <View style={styles.priceItemWrapper}>
      <Text style={styles.symbol}>{currencySymbols[currency]}</Text>
      <Text style={styles.decimal}>{decimal}</Text>
      <Text style={styles.fraction}>{fraction}</Text>
    </View>
  );
};
