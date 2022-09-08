import theme from "../theme";
import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const indexStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    margin: theme.darkOcean.spaces.sm,
    padding: theme.darkOcean.spaces.sm,
  },
});

export default indexStyle;
