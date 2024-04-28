import { StyleSheet } from "react-native";

export default StyleSheet.create({
  details: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginTop: 5,
  },
  hideButton: {
    marginTop: 5,
    fontSize: 20,
    textAlign: "center",
  },
  description: {
    fontStyle: "italic",
    fontSize: 15,
    opacity: 0.5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  category: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
