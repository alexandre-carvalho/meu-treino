import React, { useEffect, useState } from "react";

//Styles
import * as S from "./styles";
import theme from "~/themes";

interface CardProps {
  title: string;
  data: Array<[]>;
}

const Card: React.FC<CardProps | any> = ({ title, data }) => {
  const [color, setColor] = useState("");
  const [status, setStatus] = useState("");
  const item = data[0];

  useEffect(() => {
    onStatus();
  }, [onStatus]);

  function onStatus() {
    if (item.duration < 20) {
      setStatus("Baixo");
      setColor(theme.colors.red.n0);
    }
    if (item.duration >= 20 || item.duration < 30) {
      setStatus("Regular");
      setColor(theme.colors.orange.n0);
    }
    if (item.duration >= 30) {
      setStatus("Alto");
      setColor(theme.colors.green.n0);
    }
  }
  console.log("ITEM", item);

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
        <S.Rows>
          <S.Label fsize={18}>Rendimento:</S.Label>
          <S.Label color={color} fsize={18}>
            {status}
          </S.Label>
        </S.Rows>
      </S.Content>
    </S.Container>
  );
};

export default Card;
