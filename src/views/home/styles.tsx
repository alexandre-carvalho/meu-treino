import styled from "styled-components";
import theme from "~/themes";
import { View, Text, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.white.n0};
`;

export const Content = styled(ScrollView)``;

export const UserContent = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 200px;
  padding: 16px;
`;

export const LabelContent = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  height: 75px;
`;

export const Label = styled(Text)<any>`
  margin-right: 3px;
  font-size: ${(props: any) => (props.fsize ? props.fsize + "px" : "11px")};
`;

export const CardContainer = styled(View)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
`;
