import React from "react";
import { Text } from "react-native";
import viewerStyle from "./Viewer.style";

const Viewer = () => {
  return (
    <Text style={viewerStyle.content}>Aqui se verá el .md renderizado</Text>
  );
};

export default Viewer;
