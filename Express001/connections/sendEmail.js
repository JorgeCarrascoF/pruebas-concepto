const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  //host: "smtp.ethereal.email",
  service: "gmail",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    //user: "clemens.braun0@ethereal.email",
    //pass: "dzhFZn8vgbbPExPAMr",
    user: "futrenca@gmail.com",
    pass: "oxvm iutz nkyi kjfm", //contraseña de app
  },
});

// Wrap in an async IIFE so we can use await.
(async () => {
  const info = await transporter.sendMail({
    from: '"Equipo de Desarrollo" <futrenca@gmail.com>',
    to: "nicolas.sam1992@gmail.com",
    subject: "Alerta de errores críticos",
    text: "Errores críticos no solucionados", // plain‑text body
    html: "<b>Se detectó un error crítico en la app</b>", // HTML body
  });

  console.log("Message sent:", info.messageId);
})();