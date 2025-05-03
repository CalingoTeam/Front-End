// components/Login.jsx
import React from "react";
import "./Login.css";
import iconeGoogle from "../assets/google.svg";
import iconeFacebook from "../assets/facebook.svg";

function Login() {
  return (
    <div className="formulario-login">
      <h2>Entrar</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Senha" />
      <button>Entrar</button>
      <div className="sociais">
        <img src={iconeGoogle} alt="Google" />
        <img src={iconeFacebook} alt="Facebook" />
      </div>
    </div>
  );
}

export default Login;
