// Core
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Home1 from "../stack/Home1";
import Home2 from "../stack/Home2";

const Stack = createStackNavigator();

export function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home1" component={Home1} />
      <Stack.Screen name="Home2" component={Home2} />
    </Stack.Navigator>
  );
}
