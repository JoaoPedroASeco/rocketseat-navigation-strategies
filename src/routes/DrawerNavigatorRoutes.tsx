// Core
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens
import Home from "../screens/bottomTab/Home";

const Drawer = createDrawerNavigator();

export function DrawerNavigatorRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="home" component={Home} />
    </Drawer.Navigator>
  );
}
