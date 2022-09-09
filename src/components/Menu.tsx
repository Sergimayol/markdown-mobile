import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
import style from "./Menu.style";
import * as FileSystem from "expo-file-system";

const Menu = () => {
  const navigation = useNavigation();

  const handleDocumentSelection = async () => {
    const response = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false,
      multiple: false,
      type: "text/markdown",
    });
    const result = response.type === "success" ? response.name : "cancelled";
    // Redireccionar a /renderer con el path del archivo
    if (result !== "cancelled") {
      await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
      // Copiar archivo
      await FileSystem.copyAsync({
        from: response.uri,
        to: FileSystem.documentDirectory + result,
      });

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
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={style.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDocumentSelection}>
          <Text style={style.text}>Open file</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Menu;
