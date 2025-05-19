import React from "react";
import "./Cadastro.css";
import iconeGoogle from "../assets/google.svg";
import iconeFacebook from "../assets/facebook.svg";
import user from "../assets/User.svg";
import lock from "../assets/Lock.svg";

function Cadastro({ onLogin }) {
  return (
    <div className="formulario-cadastro">
      <h2>Cadastro</h2>
      <div className="input-wrapper">
        <input type="text" placeholder="Apelido" />
        <img src={user} className="user" alt="User" />
      </div>
      <div className="input-wrapper">
        <input type="email" placeholder="Email" />
        <img src={user} className="user" alt="User" />
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="Senha" />
        <img src={lock} className="lock" alt="Lock" />
      </div>
      <div className="caixas-selecao">
        <select>
          <option value="">Cidade</option>
          <option value="rio">Rio de Janeiro</option>
          <option value="sp">São Paulo</option>
          <option value="pe">Pernambuco</option>
        </select>

        <select>
          <option value="">Estado</option>
          <option value="rj">RJ</option>
          <option value="sp">SP</option>
          <option value="pe">PE</option>
        </select>
      </div>

      <button className="btn-cadastrar" onClick={onLogin}>
        Cadastrar
      </button>

      <div className="sociais">
        <img src={iconeGoogle} alt="Google" />
        <img src={iconeFacebook} alt="Facebook" />
      </div>
    </div>
    
  );
}

export default Cadastro;
