import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

//Assets
import IcoHome from "~/assets/png/tabBar/home.png";
import IcoHome2 from "~/assets/png/tabBar/home2.png";

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
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? IcoHome : IcoHome2;
          } else if (route.name === "Settings") {
            iconName = focused ? IcoHome : IcoHome2;
          }

          return (
            <Image
              resizeMode={"contain"}
              source={iconName}
              style={{ opacity: focused ? 1 : 0.4, width: 28, height: 28 }}
            />
          );
        },
        tabBarActiveTintColor: theme.colors.black.n0,
        tabBarInactiveTintColor: theme.colors.grey.n0,
        unmountOnBlur: true,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Home2} />
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
