import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as FileSystem from "expo-file-system";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Viewer from "../components/Viewer";
import Menu from "../components/Menu";
import style from "./screens.style";

const Renderer = () => {
  const [content, setContent] = useState("");
  const route = useRoute();
  const filename = route.params.file;

  async function getContent() {
    const promise = await FileSystem.readAsStringAsync(
      FileSystem.documentDirectory + filename
    );
    console.log(promise);
    setContent(promise);
  }

  useEffect(() => {
    getContent();
  }, []);

  console.log(content);

  return (
    <View style={style.container}>
      <Menu />
      <Viewer text={content} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Renderer;
