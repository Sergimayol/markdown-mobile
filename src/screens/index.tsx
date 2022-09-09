import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Viewer from "../components/Viewer";
import Menu from "../components/Menu";
import style from "./screens.style";

const Home = () => {
  return (
    <View style={style.container}>
      <Menu />
      <Viewer text="" />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
