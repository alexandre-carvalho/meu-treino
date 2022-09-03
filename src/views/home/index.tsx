import React from "react";

//Components
import Card from "./components/Card";

//Styles
import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.UserContent>
          <S.LabelContent>
            <S.Label fsize={32}>Olá,</S.Label>
            <S.Label fsize={32}>Alexandre</S.Label>
          </S.LabelContent>
          <S.LabelContent>
            <S.Label fsize={22}>Peso atual:</S.Label>
            <S.Label fsize={18}>85.5</S.Label>
            <S.Label fsize={11}>Kg</S.Label>
          </S.LabelContent>
        </S.UserContent>
        <S.CardContainer>
          <Card title="Últimos Treinos" />
        </S.CardContainer>
      </S.Content>
    </S.Container>
  );
};

export default Home;
