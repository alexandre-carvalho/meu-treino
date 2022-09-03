import React from "react";
import { Text } from "react-native";

//Styles
import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <S.Container
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <Text>Meus Treinos</Text>
    </S.Container>
  );
};

export default Home;
