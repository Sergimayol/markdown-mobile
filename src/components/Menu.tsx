import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
import style from "./Menu.style";

const Menu = () => {
  const navigation = useNavigation();

  const handleDocumentSelection = async () => {
    const response = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: true,
      multiple: false,
      type: "text/markdown",
    });
    const result = response.type === "success" ? response.name : "cancelled";
    // Redireccionar a /renderer con el path del archivo
    if (result !== "cancelled") {
      navigation.navigate("Renderer", { file: result });
    }
  };

  return (
    <View style={style.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={style.scroll}
      >
        <View style={style.text}>
          <TouchableOpacity onPress={handleDocumentSelection}>
            <Text style={style.text}>Open file</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={style.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Renderer")}>
            <Text style={style.text}>Renderer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Menu;
