import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import TabRoutes from "./tabRoutes";

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeTabRoutes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeTabRoutes" component={TabRoutes} />
    </Stack.Navigator>
  );
};

//Main route - call Auth routes or App routes
const RootStack = createSwitchNavigator({
  Auth: AuthStack,
});

const Routes = createAppContainer(RootStack);

export default Routes;
