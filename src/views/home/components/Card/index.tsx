import React from "react";

//Styles
import * as S from "./styles";

interface CardProps {
  title: string;
  data: Array<[]>;
}

const Card: React.FC<CardProps | any> = ({ title, data }) => {
  const item = data[0];

  return (
    <S.Container>
      <S.Title>
        <S.Label fsize={16}>{title}</S.Label>
      </S.Title>
      <S.Content>
        <S.Rows>
          <S.Label fsize={18}>Atividade: {item.activity}</S.Label>
        </S.Rows>
        <S.Rows>
          <S.Label fsize={18}>Data: {item.date}</S.Label>
        </S.Rows>
        <S.Rows>
          <S.Label fsize={18}>Duração: {item.duration}</S.Label>
        </S.Rows>
      </S.Content>
    </S.Container>
  );
};

export default Card;
