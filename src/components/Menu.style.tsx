import Constants from "expo-constants";
import theme from "../theme";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight + 20,
    paddingLeft: theme.darkOcean.spaces.sm,
    backgroundColor: theme.darkOcean.colors.tertiary,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: theme.darkOcean.colors.primary,
    fontSize: theme.darkOcean.fontSizes.subheading,
    paddingHorizontal: theme.darkOcean.spaces.sm,
  },
  scroll: {
    paddingBottom: theme.darkOcean.spaces.md,
  },
});

export default style;
