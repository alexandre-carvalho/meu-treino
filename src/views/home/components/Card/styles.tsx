import styled from "styled-components";
import theme from "~/themes";
import { View, Text } from "react-native";

export const Container = styled(View)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 16px;
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
  height: 30px;
  margin-bottom: 10px;
`;

export const Label = styled(Text)<any>`
  color: ${(props: any) => (props.color ? props.color : theme.colors.grey.n0)};
  margin-right: 4px;
  font-size: ${(props: any) => (props.fsize ? props.fsize + "px" : "11px")};
`;

export const Content = styled(View)`
  display: flex;
  flex-direction: column;
  padding: 20px 0 10px 0;
  width: 100%;
  border-top-width: 0.5px;
  border-color: ${theme.colors.grey.n02};
`;

export const Rows = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
`;
