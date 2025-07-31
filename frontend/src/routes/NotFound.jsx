import React from "react";
import NavButton from "../components/NavButton";

function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <NavButton text="Volver al inicio" route="/" />
    </div>
  );
}

export default NotFound;