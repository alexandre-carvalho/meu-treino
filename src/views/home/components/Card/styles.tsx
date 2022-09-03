import styled from "styled-components";
import theme from "~/themes";
import { View, Text } from "react-native";

export const Container = styled(View)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  padding: 16px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-width: 1px;
  border-color: ${theme.colors.grey.n02};
`;

export const Title = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 25px;
  background-color: aliceblue;
`;

export const Label = styled(Text)<any>`
  margin-right: 3px;
  font-size: ${(props: any) => (props.fsize ? props.fsize + "px" : "11px")};
`;
