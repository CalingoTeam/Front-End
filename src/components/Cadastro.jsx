// components/Cadastro.jsx
import React from "react";
import "./Cadastro.css";
import iconeGoogle from "../assets/google.svg";
import iconeFacebook from "../assets/facebook.svg";

function Cadastro() {
  return (
    <div className="formulario-cadastro">
      <h2>Cadastro</h2>

      <input type="text" placeholder="Apelido" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Senha" />

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

      <button className="botao-cadastrar">Cadastrar</button>

      <div className="sociais">
        <img src={iconeGoogle} alt="Google" />
        <img src={iconeFacebook} alt="Facebook" />
      </div>
    </div>
  );
}

export default Cadastro;
