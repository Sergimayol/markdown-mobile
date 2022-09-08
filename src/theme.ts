const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

// https://www.color-name.com/
const colors = {
  primary: {
    50: "#EEF2F6",
    100: "#CFD9E7",
    200: "#B1C1D8",
    300: "#92A9C9",
    400: "#7491B9",
    500: "#5578AA",
    600: "#446088",
    700: "#334866",
    800: "#223044",
    900: "#111822",
  },
  customColors: {
    licorice: "#171308",
    blackChocolate: "#1C1711",
    rocketMetallic: "#857c77",
    silverChalice: "#b4aaa8",
    cyanBlueAzure: "#4183C4",
    lightGrey: "#ACADAC",
    gainsboro: "#DDDDDD",
    plainWhite: "#FFFFFF",
    raisinBlack: "#222222",
    grey: "#7B7B7D",
  },
};

const fontSizes = {
  body: 14,
  subheading: 16,
  heading: 20,
  title: 24,
};

const fonts = {
  main: "System",
  ios: {
    SanFrancisco: "San Francisco",
    academyEngravedLET: "Academy Engraved LET",
    academyEngravedLetPlain: "AcademyEngravedLetPlain",
    alNile: "Al Nile",
    alNileBold: "AlNile-Bold",
    americanTypewriter: "American Typewriter",
    americanTypewriterBold: "AmericanTypewriter-Bold",
    americanTypewriterCondensed: "AmericanTypewriter-Condensed",
    appleColorEmoji: "Apple Color Emoji",
  },
  android: {
    normal: "normal",
    notoserif: "notoserif",
    sansserif: "sans-serif",
    serif: "serif",
    roboto: "Roboto",
    monospace: "monospace",
  },
};

const fontWeights = {
  normal: "400",
  bold: "700",
};

const spaces = {
  sm: 8,
  md: 16,
  ll: 32,
  xl: 64,
  xxl: 128,
};

const palettes = {
  brightOcean: {
    primary: "#1f2326",
    secondary: "#1e3030",
    tertiary: "#1a494f",
    quaternary: "#d5dbe7",
  },
  darkOcean: {
    primary: colors.customColors.licorice,
    secondary: colors.customColors.blackChocolate,
    tertiary: colors.customColors.rocketMetallic,
    quaternary: colors.customColors.silverChalice,
  },
  sunsetMountain: {
    primary: "#1c232d",
    secondary: "#46474b",
    tertiary: "#f48b0c",
    quaternary: "#eee9e6",
  },
  coffeeBar: {
    primary: "#0c1622",
    secondary: "#b4560e",
    tertiary: "#9c9489",
    quaternary: "#dfdde2",
  },
};

const theme = {
  darkOcean: {
    colors: palettes.darkOcean,
    fontSizes: fontSizes,
    fonts: fonts,
    fontWeights: fontWeights,
    spaces: spaces,
  },
  brightOcean: {
    colors: palettes.brightOcean,
    fontSizes: fontSizes,
    fonts: fonts,
    fontWeights: fontWeights,
    spaces: spaces,
  },
  customColors: colors.customColors,
  primaryColors: colors.primary,
};

export default theme;
