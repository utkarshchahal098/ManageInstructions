import React from "react";
import {Typography, Box, BottomNavigation, ButtonGroup} from "@mui/material";
import * as S from "./index.style";

export const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <Box>
        <BottomNavigation
          sx={{
            backgroundColor: "black",
            height: "70px",
            position: "fixed",
            bottom: 0,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "white"
          }}
        >
            <div style={{padding: "10px", marginLeft: "150px", display: "flex",
            flexDirection: "column"}}>
             <Typography sx={{marginLeft: "0px", textAlign: "justify"}}>AssetMark</Typography>
             <Typography>CopyRight @2024. Property of Assetmark trust</Typography>
            </div>
            <div style={{padding: "10px",  marginRight: "150px"}}>
            <ButtonGroup variant= "text">
               <S.Link>Security & Privacy</S.Link>
               <S.Link>Links</S.Link>
               <S.Link>Supported Browsers</S.Link>
           </ButtonGroup>
            </div>
        </BottomNavigation>
      </Box>
    </React.Fragment>
  );
};
