import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Routes from "~/routes";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={false}
      />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
