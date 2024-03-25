import React from "react";
import * as S from "./index.style";
import { AppBar, Typography } from "@mui/material";

interface props {
  toolname: string;
  advisorId: string;
}

export const Header: React.FC<props> = ({ toolname, advisorId }) => {
  return (
    <AppBar
      sx={{ backgroundColor: "#336BFF", 
            display: "flex", 
            flexDirection: "row",  
            height: "90px", 
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 100px" ,
            "& > *": {
              marginBottom: "10px", // Add space between the Typography components
            },
            "@media (min-width: 600px)": {
              flexDirection: "row",
              justifyContent: "space-between",
              height: "90px",
              padding: "0 20px",
              "& > *": {
                marginBottom: "0", // Reset margin for larger screens
              },
            },
          }}
    >
      <Typography sx={{fontFamily: "Roboto",fontSize: "28px", textAlign: "left", marginLeft: "100px"}}>{toolname}</Typography>
      <Typography sx={{fontFamily: "Roboto",fontSize: "28px", textAlign: "right", marginRight: "100px"}}>AdvisorId:{advisorId}</Typography>
    </AppBar>
  );
};
