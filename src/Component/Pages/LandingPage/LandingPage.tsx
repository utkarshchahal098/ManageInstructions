import { Button } from "@mui/material";
import Services from "../../API calls/Services";
import CheckBoxCard from "../../Sections/CheckBoxSection/CheckBoxCard";
import { ClientInfoSection } from "../../Sections/ClientInfoSection/ClientInfoSection";
import DeliveryMethod from "../../Sections/DeliveryMethods/DeliveryMethods";
import React from "react";
import * as Style from "./LandingPage.style";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Style.LandingPageContainer>
        <ClientInfoSection />
        <DeliveryMethod />
        <CheckBoxCard />
        <Style.ButtonContainer>
          <Button variant="contained">Next</Button>
        </Style.ButtonContainer>
      </Style.LandingPageContainer>
    </React.Fragment>
  );
};

export default LandingPage;
