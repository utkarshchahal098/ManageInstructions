import styled from "@emotion/styled";
import { Card } from "@mui/material";
import CheckBox from "./CheckBox/CheckBox";

export const MainWrapper = styled(Card)`

`
export const CheckBoxContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 20px 100px 50px 100px;
  padding: 10px;
`;

export const CheckBoxStyle = styled(CheckBox)`
  width: 20px !important;
`;
