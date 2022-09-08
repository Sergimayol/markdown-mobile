import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import style from "./Menu.style";

const Menu = () => {
  const handlePress = () => {
    console.log("Pressed");
  };
  return (
    <View style={style.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={style.scroll}
      >
        <View style={style.text}>
          <TouchableOpacity onPress={handlePress}>
            <Text style={style.text}>Open file</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Menu;
