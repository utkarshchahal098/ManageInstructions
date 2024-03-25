import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

export const ClientInfoSection: React.FC = () => {
  return (
    <React.Fragment>
      <Card sx={{ marginTop: "120px", marginLeft: "100px", marginRight: "100px"}}>
        <CardContent>
          <Typography sx={{fontFamily: "sans-serif", fontSize: 20, textAlign: "left"}} variant="h5" component="div">
            Client Household
          </Typography>
          <Typography sx={{ fontSize: 14, textAlign: "left"}} color="text.secondary" gutterBottom>
            Spencer, Young
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
