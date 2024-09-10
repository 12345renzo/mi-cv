"use client"
import Main from "@/components/Main";
import React, { useState } from "react";
import "../../../style/contacto.css";
import { Alert, Box, Button, FormControl, Grid2, Input, InputLabel, TextField, Typography } from "@mui/material";

function Capepage() {

  const [data, setdata] = useState({
    nombre:'',
    email:'',
    subject:'',
    mensaje:''
  });

  //para que aparesca el alert
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  const cambio = (e) => {
    const {name,value} = e.target;
    setdata({
      ...data,
      [name]:value,
    });
  }

  const enviar = async(e) => {
    e.preventDefault();
    const res = await fetch('/api/email',{
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const datas = await res.json();
    setAlertMessage(datas.mensaje);
          setAlertType("success");
          setAlertOpen(true);
          setTimeout(() => {
            setAlertOpen(false);
            limpiarCampos();
          }, 2000);
  } 
  function limpiarCampos() {
    setdata({
      nombre:'',
    email:'',
    subject:'',
    mensaje:''
    });
  }

  return (
    <div className="slide-top-container">
      <div className="slide-top">
        <Main
          subtitle="No dudes en contactarme"
          title="Contáctame"
        />
        <div className="conten">
          <Grid2 container spacing={2} sx={{flexDirection: {
                xs: "column",
                sm: "row",
              },
              marginBottom: "120px",
              "@media (max-width: 750px)": {
                flexDirection: "column",
              },}}>
            <Grid2 item size={6} sx={{padding:"15px 45px","@media (max-width: 950px)": {
                  padding:"15px 10px"
                },
              "@media (max-width: 750px)": {
                width: "100%",
              },}}>
              {alertOpen && (
        <Alert
          severity={alertType}
          onClose={() => setAlertOpen(false)}
          sx={{
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: 9999,
            minWidth: "300px",
          }}
        >
          {alertMessage}
        </Alert>
      )}
              <h2 className="daleh2">Enviame un mensaje</h2>
              <Box component="form" onSubmit={enviar} size={12} className="forms">
                {/* para el nombre */}
                <FormControl fullWidth variant="standard" className="controles">
                  <Input className="inputs" placeholder="Nombre" required variant="standard" id="nombre" name="nombre" margin="normal" value={data.nombre} onChange={cambio} fullWidth type="text"/>
                </FormControl>
                {/* para el email */}
                <FormControl fullWidth variant="standard" className="controles">
                  <Input className="inputs" placeholder="Email" required variant="standard" id="email" name="email" margin="normal" value={data.email} onChange={cambio} fullWidth type="email"/>
                </FormControl>
                {/* para el subject */}
                <FormControl fullWidth variant="standard" className="controles">
                  <Input className="inputs" placeholder="Subject" required variant="standard" id="subject" name="subject" margin="normal" value={data.subject} onChange={cambio} fullWidth type="text"/>
                </FormControl>
                {/* para el subject */}
                <FormControl fullWidth variant="standard" className="controles">
                  <Input className="inputs" multiline rows={4} required placeholder="Mensaje" variant="standard" id="mensaje" name="mensaje" margin="normal" value={data.mensaje} onChange={cambio} fullWidth type="text"/>
                </FormControl>
                <Button type="submit" className="enviar">Enviar mensaje</Button>
              </Box>
            </Grid2>
            <Grid2 container spacing={0} size={6} sx={{padding:"15px 45px","@media (max-width: 950px)": {
                  padding:"15px 10px"
                },"@media (max-width: 750px)": {
                width: "100%",
              },}}>
              <Grid2 item size={12}>
                <h2 className="daleh2">Informacion de contacto</h2>
                <p className="peque">Siempre disponible para trabajos independientes si surge el proyeco adecuado. ¡No dudes en contactarme!</p>
              </Grid2>
              <Grid2 container spacing={0} size={12}> 
                <Grid2 item size={2} sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
                  <span className="material-icons pl"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="33px" fill="#009e66"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg></span>
                  <span className="material-icons pl"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="33px" fill="#009e66"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg></span>
                  <span className="material-icons pl"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="33px" fill="#009e66"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg></span>
                  <span className="material-icons pl"><svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="30px" fill="#009e66"><path d="M0 0h24v24H0z" fill="none"/><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></span>
                </Grid2>
                <Grid2 container size={10} sx={{borderLeft:"2px #9f9f9f solid"}}>
                  <Grid2 item size={12} sx={{padding:"12px 0 12px 22px"}}>
                    <h4 className="olp">Nombre</h4>
                    <p className="op">Paul Renzo Gonzales Asencios</p>
                  </Grid2>
                  <Grid2 item size={12} sx={{padding:"12px 0 12px 22px"}}>
                    <h4 className="olp">Ubicación</h4>
                    <p className="op">Av. San Martin 294</p>
                  </Grid2>
                  <Grid2 item size={12} sx={{padding:"12px 0 12px 22px"}}>
                    <h4 className="olp">Llámame</h4>
                    <p className="op">976201879</p>
                  </Grid2>
                  <Grid2 item size={12} sx={{padding:"12px 0 12px 22px"}}>
                    <h4 className="olp">Enviame un correo</h4>
                    <p className="op">renzogonzales<span className="op">asencios@gmail.com</span></p>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </div>
      </div>
    </div>
  );
}

export default Capepage;
