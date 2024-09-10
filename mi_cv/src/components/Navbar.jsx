"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "../style/navbar.css";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{backgroundColor:"transparent", boxShadow:"none"}} className="todo">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="navbar">
          <Box className="img">
            <Image  alt="Logo" src="/img/logo.png" width={200} 
        height={58}/>
          </Box>
          <Box className="option">
            <Link href="/rg/about" className="boton">ACERCA DE MI</Link>
            <Link href="/rg/resumen" className="boton">RESUMEN</Link>
            <Link href="/rg/portafolio" className="boton">PORTAFOLIO</Link>
            <Link href="/rg/contacto" className="boton">CONTACTO</Link>
            <Box className="menu">
              <Tooltip title="Opciones">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, color: "white", fontWeight: "bold" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-list-nested"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "#191919",
                    width: 250,
                    padding: 1.2
                  },
                }}
                className="menuoption"
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu} className="item">
                  <Link href="/rg/about" className="boton2">About</Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu} className="item">
                  <Link href="/rg/resumen" className="boton2">Resumen</Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu} className="item">
                  <Link href="/rg/portafolio" className="boton2">Portafolio</Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu} className="item">
                  <Link href="/rg/contacto" className="boton2">Contacto</Link>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
