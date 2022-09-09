import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as FileSystem from "expo-file-system";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Viewer from "../components/Viewer";
import Menu from "../components/Menu";
import style from "./screens.style";

const Renderer = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Menu />
      <Viewer text={"# Hello World !!"} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Renderer;
