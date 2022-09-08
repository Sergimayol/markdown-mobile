import { View, Text, ScrollView } from "react-native";
import style from "./Menu.style";

const Menu = () => {
  return (
    <View style={style.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={style.scroll}
      >
        <Text style={style.text}>Select file</Text>
        <Text style={style.text}>View file</Text>
      </ScrollView>
    </View>
  );
};

export default Menu;
