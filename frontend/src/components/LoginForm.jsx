import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { api } from "../api";

const loginUser = async (data) => {
  const response = await api.post(`/login`, data);
  return response.data;
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("Login exitoso:", data);
      setSuccess("Login exitoso!");
    },
    onError: (error) => {
      console.error("Login fallido:", error);
      setError("Ha habido un error en el login: " + error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.includes("@")) {
      setError("El correo electronico no es valido.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setEmail("");
    setPassword("");

    // fetch a la DB
    mutation.mutate({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          marginBottom: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <h2>Formulario de login</h2>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="user@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {mutation.isPending ? (
          <ClipLoader color="#36d7b7" size={20} />
        ) : (
          <button type="submit">Login</button>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
    </form>
  );
};

export default LoginForm;
