import React from "react";

//Styles
import * as S from "./styles";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <S.Container>
      <S.Title>
        <S.Label fsize={16}>{title}</S.Label>
      </S.Title>
    </S.Container>
  );
};

export default Card;
