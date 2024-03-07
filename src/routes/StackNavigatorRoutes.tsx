import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/bottomTab/Home";
import Profile from "../screens/bottomTab/Profile";

const Stack = createStackNavigator();

export function StackNavigatorRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
