import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#a9a9a9",
    gap: 10,
  },
  shortDetails: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  itemContainer: {
    padding: 10,
  },

  details: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginTop: 5,
  },
  hideButton: {
    marginTop: 5,
    color: "red",
  },
});
