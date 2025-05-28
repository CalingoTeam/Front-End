import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";
import lupa from "../assets/lupa.svg";
import userIcon from "../assets/User.svg";
import fogoIcon from "../assets/foguinho.svg";
import buscarConversaIcon from "../assets/buscarConversa.svg";
import iguana from "../assets/iguana.png";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [busca, setBusca] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (busca.trim() !== "") {
      navigate(`/significado/${busca.trim()}`);
    }
  };

  const isAuthPage = location.pathname === "/login" || location.pathname === "/cadastro";

  return (
    <header className="cabecalho">
      <img src={iguana} alt="Iguana" className="iguana-telaInicial" />

      {isAuthPage ? (
        <img src={logo} alt="Logo" className="logo" />
      ) : (
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      )}

      <form className="busca" onSubmit={handleSubmit}>
        <img src={lupa} alt="Buscar" className="lupa" />
        <input
          type="text"
          placeholder="Pesquise uma expressão..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </form>

      <nav className="menu">
        <Link to="/desafio">Desafio</Link>
        <img src={fogoIcon} alt="Desafio" className="fogo-Icon" />

        <Link to="/dicionario">Dicionário</Link>
        <img src={buscarConversaIcon} alt="Buscar" className="buscarConversa-Icon" />

        <Link to="/perfil">Perfil</Link>
        <img src={userIcon} alt="Perfil" className="perfil-icon" />
      </nav>
    </header>
  );
}

export default Header;