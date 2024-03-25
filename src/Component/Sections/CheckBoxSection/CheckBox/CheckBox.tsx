import React from "react";
import * as Style from "./CheckBox.style";

interface Props {
  id: number;
  name: string;
  code: string;
}

const CheckBox: React.FC<Props> = ({ id, name, code }) => {
  return (
    <>
      <Style.checkBoxWrapper>
        <input type="checkbox" id={`checkbox-${id}`} />
        <label htmlFor={`checkbox-${id}`}>
          {name} - {code}
        </label>
      </Style.checkBoxWrapper>
    </>
  );
};

export default CheckBox;
