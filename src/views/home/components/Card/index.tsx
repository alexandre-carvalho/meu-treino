import React from "react";

//Models
import { CardInfo } from "~/models/card";

//Styles
import * as S from "./styles";

interface CardProps {
  title: string;
  data: CardInfo[];
}

const Card: React.FC<CardProps | any> = ({ title, data }) => {
  const info = data[0];
  console.log("DATA", info);
  return (
    <S.Container>
      <S.Title>
        <S.Label fsize={16}>{title}</S.Label>
      </S.Title>
      <S.Content>
        <S.Rows>
          <S.Label fsize={18}>{info && info.activity}:</S.Label>
          <S.Label fsize={18}>{info && info.activity}</S.Label>
        </S.Rows>
      </S.Content>
    </S.Container>
  );
};

export default Card;
