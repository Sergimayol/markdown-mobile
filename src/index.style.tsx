import theme from "./theme";
import { StyleSheet } from "react-native";

const indexStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.darkOcean.colors.quaternary,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    margin: theme.darkOcean.spaces.sm,
    padding: theme.darkOcean.spaces.sm,
  },
});

export default indexStyle;
