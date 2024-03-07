// Core
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { ProfileRoutes } from "../screens/bottomTab/Profile";
import { SettingRoutes } from "../screens/bottomTab/Settings";
import { HomeRoutes } from "../screens/bottomTab/Home";

const Tab = createBottomTabNavigator();

export function BottomTabNavigatorRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeRoutes} />
      <Tab.Screen name="Profile" component={ProfileRoutes} />
      <Tab.Screen name="Settings" component={SettingRoutes} />
    </Tab.Navigator>
  );
}
