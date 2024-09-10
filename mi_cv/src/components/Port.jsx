import { Grid2 } from "@mui/material";
import React from "react";
import "../style/portafolio.css";
import Link from "next/link";

function Port({ ruta, titu, lore, lik }) {
  return (
    <Grid2
      size={{ xs: 2, sm: 4, md: 4 }}
      sx={{ position: "relative",
              "@media (max-width: 700px)": {
                width: "100%",
              },
            }}
    >
      <Link href={lik} target="_blank">
        <div className="tod">
          <div className="cont">
            <h4 className="titu">{titu}</h4>
            <p className="lor">{lore}</p>
          </div>
          <img alt="stipe" src={ruta} className="im" />
        </div>
      </Link>
    </Grid2>
  );
}

export default Port;
