"use client";
import Main from "@/components/Main";
import Port from "@/components/Port";
import { useState } from "react";
import "../../../style/portafolio.css";
import { Button, Grid2 } from "@mui/material";

function Porpage() {
  const [filter, setFilter] = useState("all");
  const [selectedButton, setSelectedButton] = useState(1);

  const handleFilterChange = (newFilter, index) => {
    setFilter(newFilter);
    setSelectedButton(index);
  };

  const getFilteredContent = () => {
    switch (filter) {
      case "react":
        return (
          <Grid2
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              "@media (max-width: 700px)": {
                display: "flex",
                flexDirection: "column",
                width: "100%",
              },
            }}
          >
            <Port
              ruta="/img/logo.png"
              titu="React JS + Sprint Boot + SQL Server"
              lore="Proyecto CRUD con React, SprintBoot y SqlServer usando
            microservicios, Hibernet, jpa y Material UI"
              lik="https://next-prisma-2blseqqi2-renzos-projects-3bec9765.vercel.app/"
            />
          </Grid2>
        );
      case "next":
        return (
          <Grid2
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              "@media (max-width: 700px)": {
                display: "flex",
                flexDirection: "column",
                width: "100%",
              },
            }}
          >
            <Port
              ruta="/img/next1.png"
              titu="Next JS + PostgreSQL"
              lore="Proyecto CRUD con Next tanto front y back aparte prisma con PostgreSQL usando
            microservicios y Tailwind"
              lik="https://next-prisma-2blseqqi2-renzos-projects-3bec9765.vercel.app/"
            />
          </Grid2>
        );
      default:
        return (
          <Grid2
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              marginBottom:"70px",
              "@media (max-width: 700px)": {
                display: "flex",
                flexDirection: "column",
                width: "100%",
              },
            }}
          >
            <Port
              ruta="/img/logo.png"
              titu="React JS + Sprint Boot + SQL Server"
              lore="Proyecto CRUD con React, SprintBoot y SqlServer usando
        microservicios, Hibernet, jpa y Material UI"
              lik="https://next-prisma-2blseqqi2-renzos-projects-3bec9765.vercel.app/"
            />
            <Port
              ruta="/img/next1.png"
              titu="Next JS + PostgreSQL"
              lore="Proyecto CRUD con Next tanto front y back aparte prisma con PostgreSQL usando
        microservicios y Tailwind"
              lik="https://next-prisma-2blseqqi2-renzos-projects-3bec9765.vercel.app/"
            />
            <Port
              ruta="/img/logo.png"
              titu="React JS + Sprint Boot + SQL Server"
              lore="Proyecto CRUD con React, SprintBoot y SqlServer usando
        microservicios, Hibernet, jpa y Material UI"
              lik="https://next-prisma-2blseqqi2-renzos-projects-3bec9765.vercel.app/"
            />
            <Port
              ruta="/img/logo.png"
              titu="React JS + Sprint Boot + SQL Server"
              lore="Proyecto CRUD con React, SprintBoot y SqlServer usando
        microservicios, Hibernet, jpa y Material UI"
              lik="https://next-prisma-2blseqqi2-renzos-projects-3bec9765.vercel.app/"
            />
            <Port
              ruta="/img/logo.png"
              titu="React JS + Sprint Boot + SQL Server"
              lore="Proyecto CRUD con React, SprintBoot y SqlServer usando
        microservicios, Hibernet, jpa y Material UI"
              lik="https://next-prisma-2blseqqi2-renzos-projects-3bec9765.vercel.app/"
            />
            <Port
              ruta="/img/logo.png"
              titu="React JS + Sprint Boot + SQL Server"
              lore="Proyecto CRUD con React, SprintBoot y SqlServer usando
        microservicios, Hibernet, jpa y Material UI"
              lik="https://next-prisma-2blseqqi2-renzos-projects-3bec9765.vercel.app/"
            />
          </Grid2>
        );
    }
  };

  return (
    <div className="slide-top-container">
      <div className="slide-top">
        <Main subtitle="Mostrar algunos de mis Trabajos" title="Portafolio" />
        <div className="conten">
          <Grid2
            container
            spacing={0}
            size={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <Grid2 item size="auto">
              <Button onClick={() => handleFilterChange("all", 1)}>
                <p className={`boto ${selectedButton === 1 ? "active" : ""}`}>
                  All
                </p>
              </Button>
            </Grid2>
            <Grid2 item size="auto">
              <Button onClick={() => handleFilterChange("react", 2)}>
                <p className={`boto ${selectedButton === 2 ? "active" : ""}`}>
                  React JS
                </p>
              </Button>
            </Grid2>
            <Grid2 item size="auto">
              <Button onClick={() => handleFilterChange("next", 3)}>
                <p className={`boto ${selectedButton === 3 ? "active" : ""}`}>
                  Next JS
                </p>
              </Button>
            </Grid2>
          </Grid2>
          <div>{getFilteredContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default Porpage;
