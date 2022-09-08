import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import indexStyle from "./index.style";
import Menu from "./components/Menu";
import Viewer from "./components/Viewer";

const MyApp = () => {
  return (
    <View style={indexStyle.container}>
      <Menu />
      <Viewer />
      <StatusBar style="auto" />
    </View>
  );
};

export default MyApp;
