import PostDashboard from "../components/PostDashboard";
import NavButton from "../components/NavButton";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <div className="card">
        <h1>Sin autorización</h1>
        <p>Por favor, inicie sesión para acceder a la aplicación.</p>
        <NavButton text="Ir a Login" route="/login" />
      </div>
    );
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <PostDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
