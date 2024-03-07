// Core
import { createStackNavigator } from "@react-navigation/stack";
import Profile1 from "../stack/Profile1";
import Profile2 from "../stack/Profile2";

const Stack = createStackNavigator();

export function ProfileRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile1" component={Profile1} />
      <Stack.Screen name="Profile2" component={Profile2} />
    </Stack.Navigator>
  );
}
