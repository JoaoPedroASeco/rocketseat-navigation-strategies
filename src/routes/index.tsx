// Core
import { NavigationContainer } from "@react-navigation/native";

// Bottom Tabs
import { BottomTabNavigatorRoutes } from "./BottomTabNavigatorRoutes";

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigatorRoutes />
    </NavigationContainer>
  );
};
