# Qual o objetivo desse projeto?

## "Aprender e praticar a instalacao das principais estrategias de navegacao do react native"

### Dependencias iniciais:

- yarn add @react-navigation/native
- npx expo install react-native-screens react-native-safe-area-context

#### Stack Navigator

- yarn add @react-navigation/stack
- npx expo install react-native-gesture-handler

```tsx
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
```

#### Bottom Tab Navigator

- yarn add @react-navigation/bottom-tabs

```tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
```

#### Drawer Navigator

- yarn add @react-navigation/drawer
- npx expo install react-native-gesture-handler react-native-reanimated

```tsx
  module.exports = {
    presets: [
      ... // don't add it here :)
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };
```

```tsx
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}
```
