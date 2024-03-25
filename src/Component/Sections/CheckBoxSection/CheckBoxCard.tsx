import axios from "axios";
import React, { useEffect, useState } from "react";
import * as Style from "./CheckBoxCard.style";
import { CardContent } from "@mui/material";
import CheckBox from "./CheckBox/CheckBox";

const baseurl = "https://localhost:7054/";
const CountryApi = baseurl + "api/Countries";

interface Country {
  id: number;
  name: string;
  countryCode: string;
}
const CheckBoxCard: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<number>(0);

  console.log(countries);
  useEffect(() => {
    axios
      .get(CountryApi)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the countries:", error);
      });
  }, []);

  const CheckBoxHeader = () => {
    return <></>;
  };
  return (
    <>
      <Style.CheckBoxContainer>
        {countries.map((country) => (
          <Style.CheckBoxStyle
            key={country.id}
            id={country.id}
            name={country.name}
            code={country.countryCode}
          />
        ))}
      </Style.CheckBoxContainer>
    </>
  );
};
export default CheckBoxCard;
