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

const Tab = createBottomTabNavigator();
const TabBar = () => {
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

          return <Image resizeMode={"contain"} source={iconName} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Home2} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeTabRoutes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeTabRoutes" component={TabBar} />
    </Stack.Navigator>
  );
};

//Main route - call Auth routes or App routes
const RootStack = createSwitchNavigator({
  Auth: AuthStack,
});

const Routes = createAppContainer(RootStack);

export default Routes;
