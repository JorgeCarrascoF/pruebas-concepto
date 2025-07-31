import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch a la DB
    console.log("Login: ", { email, password });
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
          type="email"
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
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
