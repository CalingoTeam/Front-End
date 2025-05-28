import React, { useState } from "react";
import "./Cadastro.css";
import iconeGoogle from "../assets/google.svg";
import iconeFacebook from "../assets/facebook.svg";
import user from "../assets/User.svg";
import lock from "../assets/Lock.svg";

function Cadastro({ onLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    state: "",
    role: "USER" // fixo
  });

  const handleFormEdit = (event, field) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleForm = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        if (onLogin) onLogin(); // redirecionar para login
      } else {
        alert("Erro ao cadastrar. Verifique os dados.");
      }
    } catch (err) {
      console.error("Erro ao cadastrar:", err);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="formulario-cadastro">
      <h2>Cadastro</h2>

      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Nome completo"
          required
          value={formData.name}
          onChange={(e) => handleFormEdit(e, "name")}
        />
        <img src={user} className="user" alt="User" />
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Apelido"
          required
          value={formData.nickname}
          onChange={(e) => handleFormEdit(e, "nickname")}
        />
        <img src={user} className="user" alt="User" />
      </div>

      <div className="input-wrapper">
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => handleFormEdit(e, "email")}
        />
        <img src={user} className="user" alt="User" />
      </div>

      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Senha"
          required
          value={formData.password}
          onChange={(e) => handleFormEdit(e, "password")}
        />
        <img src={lock} className="lock" alt="Lock" />
      </div>

      <div className="caixas-selecao">
        <select
          required
          value={formData.state}
          onChange={(e) => handleFormEdit(e, "state")}
        >
          <option value="">Selecione o estado</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="SP">São Paulo</option>
          <option value="PE">Pernambuco</option>
        </select>
      </div>

      <button className="btn-cadastrar" onClick={handleForm}>
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