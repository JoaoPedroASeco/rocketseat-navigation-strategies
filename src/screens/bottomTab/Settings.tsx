// Core
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Settings2 from "../stack/Settings2";
import Settings1 from "../stack/Settings1";

const Stack = createStackNavigator();

export function SettingRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting1" component={Settings1} />
      <Stack.Screen name="Settings2" component={Settings2} />
    </Stack.Navigator>
  );
}
