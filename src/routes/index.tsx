import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";

// Views
import Home from "~/views/home";
import Home2 from "~/views/home2";

//Style
import theme from "~/themes";

const Tab = createBottomTabNavigator();
const TabBarRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return (
            <AntDesign
              name={route.name === "Início" ? "home" : "filetext1"}
              size={18}
              color={focused ? theme.colors.black.n0 : theme.colors.grey.n0}
              style={{ opacity: focused ? 1 : 0.5 }}
            />
          );
        },
        tabBarActiveTintColor: theme.colors.black.n0,
        tabBarInactiveTintColor: theme.colors.grey.n0,
        unmountOnBlur: true,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Treinos" component={Home2} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeTabRoutes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeTabRoutes" component={TabBarRoutes} />
    </Stack.Navigator>
  );
};

const RootStack = createSwitchNavigator({
  Auth: StackRoutes,
});

const Routes = createAppContainer(RootStack);

export default Routes;
