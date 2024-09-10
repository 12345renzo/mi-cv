import { Grid2 } from "@mui/material";
import React from "react";
import '../style/main.css';
import Link from "next/link";

function Main({ subtitle, title }) {
  return (
    <Grid2 container spacing={0.5} sx={{backgroundColor:"#111"}}>
      <Grid2
        size={12}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Link href="/" className="aspa">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-x-lg aki"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </Link>
      </Grid2>
      <Grid2 size={12} sx={{ display:"flex", justifyContent: "center",
          alignItems: "center",}}>
        <p className="subti">{subtitle}</p>
      </Grid2>
      <Grid2 size={12} sx={{display:"flex", justifyContent: "center",
          alignItems: "center",}}>
        <h2 className="tit">{title}</h2>
      </Grid2>
      <Grid2 size={12} sx={{display:"flex", justifyContent: "center",
          alignItems: "center",}}>
        <div className="animacion"></div>
      </Grid2>
    </Grid2>
  );
}

export default Main;
