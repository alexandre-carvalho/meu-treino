import React from "react";
import { View, Text } from "react-native";

const Home: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <Text>Meu Treino</Text>
    </View>
  );
};

export default Home;
