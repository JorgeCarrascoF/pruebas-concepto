import { useState } from "react";
import { api } from "../api";
import { useMutation } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";

const registerUser = async (data) => {
  const response = await api.post(`/register`, data);
  return response.data;
};

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log(("Registro exitoso:", data));
      setSuccess("Registro exitoso!");
    },
    onError: (error) => {
      console.error("Registro fallido:", error);
      setError("Ha habido un error en el registro: " + error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if(!userName || userName.length < 5) {
      setError("El nombre de usuario debe tener al menos 5 caracteres.");
      return;
    }

    if (!email.includes("@")) {
      setError("El correo electrónico no es válido.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    setEmail("");
    setPassword("");

    // fetch a la DB
    mutation.mutate({ userName, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          marginBottom: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <h2>Formulario de registro</h2>
        <label htmlFor="userName">Nombre de usuario</label>
        <input
          id="userName"
          type="text"
          placeholder="usuario123"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
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
          <button type="submit">Registrarse</button>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
    </form>
  );
};

export default RegisterForm;
