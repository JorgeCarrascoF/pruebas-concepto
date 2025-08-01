import NavButton from "../components/NavButton";

const Home = () => {

  return (
    <>
      <h1>Proyecto para pruebas de concepto</h1>
      <div className="card" style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "30px" }}>
        <NavButton text="Ir a Login" route="/login" />
        <NavButton text="Ir a Register" route="/register" />
        <NavButton text="Ir a Dashboard" route="/dashboard" />
      </div>
    </>
  );
};

export default Home;
