import React from "react";
import "./Login.css";
import iconeGoogle from "../assets/google.svg";
import iconeFacebook from "../assets/facebook.svg";
import user from "../assets/User.svg";
import lock from "../assets/Lock.svg";

function Login({ onLogin }) {
  return (
    <div className="login-background">
    <div className="formulario-login">
      <h2>Entrar</h2>
      <div className="input-wrapper">
        <input type="email" placeholder="Email" />
        <img src={user} className="user" alt="User" />
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="Senha" />
        <img src={lock} className="lock" alt="Lock" />
      </div>
      <button className="btn-entrar" onClick={onLogin}>
        Entrar
      </button>
      <div className="sociais">
        <img src={iconeGoogle} alt="Google" />
        <img src={iconeFacebook} alt="Facebook" />
      </div>
    </div>
    </div>
  );
}

export default Login;
