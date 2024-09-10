import { Grid2 } from "@mui/material";
import React from "react";
import '../style/resumen.css'

function Cards({dispe,img,ruta,title,subtitle,lore,se}) {
  return (
    <Grid2
      container
      spacing={0}
      sx={{
        borderLeft: "3px #009e66 solid",
        backgroundColor: "#161616",
        borderTop: "1px solid #313131",
        borderBottom: "1px solid #313131",
        flexGrow: 1,
      }}
    >
      <Grid2 item size={1} sx={{ display: dispe  }}>
        <span className="arro"></span>
      </Grid2>
      <Grid2
        item
        size={2}
        sx={{
          display:  img, 
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img src={ruta} width={50} height={50} className="ing" />
      </Grid2>
      <Grid2
        item
        size={se}
        sx={{
          paddingTop: "25px",
          paddingRight: "48px",
          paddingBottom: "25px",
          "@media (max-width: 500px)": {
            paddingLeft: "15px",
            paddingRight: "18px",
          },
        }}
      >
        <h5 className="estu">{title}</h5>
        <p className="alma" style={{ display:  dispe  }}>
          {subtitle}
        </p>
        <p className="lore">{lore}</p>
      </Grid2>
    </Grid2>
  );
}

export default Cards;
