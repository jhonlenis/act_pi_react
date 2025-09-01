import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    onLogin({ name, email });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Crear Cuenta</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="login-input"
        />
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-btn">
          Registrarse
        </button>
      </form>
      <p className="login-footer">
        ¿Ya tienes cuenta? <a href="#">Inicia sesión</a>
      </p>
    </div>
  );
}

export default Login;
