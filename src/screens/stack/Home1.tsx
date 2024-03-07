import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home1 = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{ height: 56, padding: 16, backgroundColor: "green" }}
        onPress={() => navigation.navigate("Home2")}
      >
        <Text>Go to Home2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home1;
