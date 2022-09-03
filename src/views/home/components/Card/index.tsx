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
      <S.Content>
        <S.Rows>
          <S.Label fsize={18}>Atividade:</S.Label>
          <S.Label fsize={18}>Caminhada</S.Label>
        </S.Rows>
        <S.Rows>
          <S.Label fsize={18}>Data:</S.Label>
          <S.Label fsize={18}>03/09/2022</S.Label>
        </S.Rows>
        <S.Rows>
          <S.Label fsize={18}>Duração:</S.Label>
          <S.Label fsize={18}>00:28:00</S.Label>
        </S.Rows>
        <S.Rows>
          <S.Label fsize={18}>Rendimento:</S.Label>
          <S.Label fsize={18}>Médio</S.Label>
        </S.Rows>
      </S.Content>
    </S.Container>
  );
};

export default Card;
