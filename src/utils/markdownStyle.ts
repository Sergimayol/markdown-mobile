import theme from "../theme";
import Constants from "expo-constants";

const markdownStyle = {
  view: {},
  codeBlock: {
    fontFamily: Constants.platform?.android
      ? theme.darkOcean.fonts.android.normal
      : theme.darkOcean.fonts.ios.SanFrancisco,
    fontWeight: "500",
    backgroundColor: theme.customColors.gainsboro,
    borderRadius: 5,
    padding: 10,
  },
  del: {
    containerBackgroundColor: theme.customColors.raisinBlack,
  },
  em: {
    fontStyle: "italic",
  },
  heading: {
    fontWeight: "200",
  },
  heading1: {
    fontSize: 32,
  },
  heading2: {
    fontSize: 24,
  },
  heading3: {
    fontSize: 18,
  },
  heading4: {
    fontSize: 16,
  },
  heading5: {
    fontSize: 13,
  },
  heading6: {
    fontSize: 11,
  },
  hr: {
    backgroundColor: "#cccccc",
    height: 1,
  },
  image: {
    //height: 50, // TODO: React Native needs to support auto image size
    //width: 50, // TODO: React Native needs to support auto image size
  },
  inlineCode: {
    backgroundColor: theme.customColors.gainsboro,
    borderColor: theme.customColors.gainsboro,
    borderRadius: 3,
    borderWidth: 1,
    fontFamily: theme.darkOcean.fonts.main,
    fontWeight: "bold",
    margin: 1,
    padding: 1,
  },
  list: {},
  listItem: {
    flexDirection: "row",
  },
  listItemBullet: {
    fontSize: 20,
    lineHeight: 20,
  },
  listItemNumber: {
    fontWeight: "bold",
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  strong: {
    fontWeight: "bold",
  },
  table: {
    borderWidth: 1,
    borderColor: theme.customColors.raisinBlack,
    borderRadius: 3,
  },
  tableHeader: {
    backgroundColor: theme.customColors.rocketMetallic,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tableHeaderCell: {
    color: theme.customColors.plainWhite,
    fontWeight: "bold",
    padding: 5,
  },
  tableRow: {
    borderBottomWidth: 1,
    borderColor: theme.customColors.raisinBlack,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tableRowLast: {
    borderColor: "transparent",
  },
  tableRowCell: {
    padding: 5,
  },
  text: {
    color: theme.customColors.raisinBlack,
  },
  u: {
    borderColor: theme.customColors.raisinBlack,
    borderBottomWidth: 1,
  },
  link: {
    color: theme.primaryColors[500],
  },
  autolink: {
    color: theme.primaryColors[500],
  },
  blockQuoteText: {
    color: theme.customColors.grey,
  },
};

export default markdownStyle;
