import { Button, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Dispatch, SetStateAction } from "react";
import { OrderBy } from "types";

interface IToggleButtonProps {
  title: string;
  icon: any;
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
  setOrderBy: Dispatch<SetStateAction<OrderBy>>;
  setSortBy: Dispatch<SetStateAction<string>>;
}

export const ToggleButton: React.FC<IToggleButtonProps> = ({
  title,
  icon,
  status,
  setStatus,
  setOrderBy,
  setSortBy,
}) => {
  return (
    <View style={styles.toggleButtonWrapper}>
      <TouchableOpacity
        style={[
          styles.defaultToggleButton,
          styles.toggleButton,
          status ? styles.activeToggleButton : styles.passiveToggleButton,
        ]}
        onPress={() => {
          setStatus(status => !status);
        }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.defaultToggleButton,
          styles.orderButton,
          status ? styles.activeToggleButton : styles.passiveToggleButton,
        ]}
        onPress={() => {
          setOrderBy(orderBy => (orderBy === "ASC" ? "DSC" : "ASC"));
        }}
        disabled={!status}
      >
        <AntDesign name={icon} size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};
