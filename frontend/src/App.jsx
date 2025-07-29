import { useState } from "react";
import { jsPDF } from "jspdf";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const generarPDF = () => {
    const doc = new jsPDF();
    doc.text("Hola equipo2-tarde desde jsPDF!", 10, 10);
    doc.save("documento.pdf");
  };

  return (
    <>
      <div></div>
      <h1>Proyecto para pruebas de concepto</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div>
        <button onClick={generarPDF}>Generar PDF</button>
      </div>
    </>
  );
}

export default App;
