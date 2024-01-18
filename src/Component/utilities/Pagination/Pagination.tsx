import {Card, Pagination, Paper} from "@mui/material";
import React from "react";
import { Header } from "../../Header";

interface props {
    dataCount: number
}

const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    console.log(page);
}

const BankPagination: React.FC<props> = ({dataCount}) => {
  var pageCount = Math.ceil(dataCount/10);
  return (
    <div>
      <Paper elevation={20}></Paper>
      <Pagination 
       count={pageCount}
       color="primary"
       onChange={handleChange}
    ></Pagination>
    </div>
    
  )
}

export default BankPagination;