import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import * as Style from "./DeliveryMethods.style";

const handleChange = () => {};

const DeliveryMethod = () => {
  return (
    <React.Fragment>
      <Style.CardWrapper>
        <CardContent>
          <FormControl>
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              sx={{ fontSize: 20, textAlign: "left" }}
            >
              Delivery Method
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value="ACH"
                control={<Radio />}
                label="ACH Instructions"
              />
              <FormControlLabel
                value="Check"
                control={<Radio />}
                label="Payee"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Style.CardWrapper>
    </React.Fragment>
  );
};

export default DeliveryMethod;
