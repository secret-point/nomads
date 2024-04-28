import { StyleSheet } from "react-native";

export default StyleSheet.create({
  toggleButtonWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  defaultToggleButton: {
    backgroundColor: "#007bff",
    elevation: 8,
    borderRadius: 10,
    padding: 10,
  },
  toggleButton: {
    elevation: 8,
    borderRadius: 10,
    width: 200,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
  },
  activeToggleButton: {
    backgroundColor: "#007bff",
  },
  passiveToggleButton: {
    backgroundColor: "gray",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  orderButton: {
    fontSize: 15,
    width: 45,
    display: "flex",
    borderLeftWidth: 0.5,
    borderLeftColor: "white",
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 1,
  },
});
