//import { NextResponse } from 'next/server';
import { NextResponse } from 'next/server';
//import nodemailer from 'nodemailer';
import Mailjet from "node-mailjet";

export async function POST(request) {
    //const {nombre,email,subject,mensaje} = request.body;
    /*const data = await request.json();
    let transporte = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    try {
        await transporte.sendMail({
            from:data.email,
            to:process.env.EMAIL_TO,
            subject:data.subject,
            text:data.mensaje,
            html: `<p>Has recibido un nuevo mensaje de <strong>${data.nombre}</strong> (${data.email}):</p><p>${data.mensaje}</p>`,
        });
        return NextResponse.json({mensaje: 'Se envio el mensaje'});
    } catch (error) {
        console.error(error);
        return NextResponse.json({mensaje: 'Error en enviar el mensaje'});
    }*/
   const data = await request.json();
   const mj = Mailjet.apiConnect(process.env.MAILJET_API_KEY,
    process.env.MAILJET_API_SECRET)

   try {
     const request = await mj.post("send", { version: "v3.1" }).request({
       Messages: [
         {
           From: {
             Email: process.env.MAILJET_EMAIL_FROM,
             Name: "Renzo",
           },
           To: [
             {
               Email: process.env.MAILJET_EMAIL_TO,
               Name: "Renzo",
             },
           ],
           Subject: data.subject,
           TextPart: data.mensaje,
           HTMLPart: `<p>Has recibido un nuevo mensaje de <strong>${data.nombre}</strong> (${data.email}):</p><p>${data.mensaje}</p>`,
         },
       ],
     });

     return NextResponse.json({ mensaje: "Gracias por contactarme" });
   } catch (error) {
     console.error("Error enviando el correo:", error);
     return NextResponse.json(
       { mensaje: "Error en enviar el mensaje" },
       { status: 500 }
     );
   }
}