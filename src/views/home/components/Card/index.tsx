import React, { useEffect, useState } from "react";

//Styles
import * as S from "./styles";
import theme from "~/themes";

interface CardProps {
  title: string;
  data: Array<[]>;
}

const Card: React.FC<CardProps | any> = ({ title, data }) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    if (!data || data === null) return;
    onResult();
  }, [data]);

  function onResult() {
    const res =
      data &&
      data.map((x: any) => {
        return x;
      });
    setResponse(res);
  }

  return (
    <S.Container>
      <S.Title>
        <S.Label fsize={16}>{title}</S.Label>
      </S.Title>
      {!!response &&
        response.map((item: any, key: any) => {
          return (
            <S.Content key={key}>
              <S.Rows>
                <S.Label fsize={18}>Atividade:{item.activity}</S.Label>
              </S.Rows>
              <S.Rows>
                <S.Label fsize={18}>Data:{item.date}</S.Label>
              </S.Rows>
              <S.Rows>
                <S.Label fsize={18}>Duração:{item.duration}</S.Label>
              </S.Rows>
              <S.Rows>
                <S.Label fsize={18}>Rendimento:</S.Label>
                <S.Label fsize={18}>
                  {item.duration <= 20 ? "Baixo" : "Alto"}
                </S.Label>
              </S.Rows>
            </S.Content>
          );
        })}
    </S.Container>
  );
};

export default Card;
