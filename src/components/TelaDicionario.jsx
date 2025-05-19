import React from "react";
import { Link } from "react-router-dom";
import "./TelaDicionario.css";
import logo from "../assets/Logo.png";
import lupa from "../assets/lupa.svg";
import userIcon from "../assets/User.svg";
import fogoIcon from "../assets/foguinho.svg";
import buscarConversaIcon from "../assets/buscarConversa.svg";
import iguana from "../assets/iguana.png";
import bookmark from "../assets/bookmark.svg";
import likeIcon from "../assets/like.svg";
import dislikeIcon from "../assets/dislike.svg";
import ordenacaoIcon from "../assets/ordenacao.svg"

function TelaDicionario() {
  const expressoes = [
    {
      titulo: "Abestalhado",
      desc: "Bobo, sem noção",
      exemplo: "Tu tá abestalhado, foi?",
      likes: 21,
      dislikes: 6,
    },
    {
      titulo: "Arengar",
      desc: "Discutir, brigar",
      exemplo: "Pára de arengar e resolve logo isso!",
      likes: 53,
      dislikes: 8,
    },
    {
      titulo: "Gaitada",
      desc: "Risada, gargalhada (normalmente muito alta).",
      exemplo: "Quando ele caiu da cadeira eu dei uma gaitada.",
      likes: 45,
      dislikes: 13,
    },
    {
      titulo: "Leso",
      desc: "Desorientado, besta",
      exemplo: "Tu é muito leso, visse?",
      likes: 22,
      dislikes: 21,
    },
    {
      titulo: "Mangar",
      desc: "Zombar, fazer piada",
      exemplo: "Deixa de mangar de mim não!",
      likes: 60,
      dislikes: 16,
    },
    {
      titulo: "Oxente",
      desc: "Expressão de surpresa",
      exemplo: "Oxente, não acredito nisso!",
      likes: 78,
      dislikes: 43,
    },
  ];

  return (
    <div className="tela-dicionario">
      <header className="cabecalho">
        <img src={iguana} alt="Logo" className="iguana-telaInicial" />
        <img src={logo} alt="Logo" className="logo" />

        <form className="busca">
          <img src={lupa} alt="Buscar" className="lupa" />
          <input type="text" placeholder="Pesquise uma expressão..." />
        </form>

        <nav className="menu">
          <a href="#">Desafio</a>
          <img src={fogoIcon} alt="buscar" className="fogo-Icon" />
          <a href="#">Dicionário</a>
          <img src={buscarConversaIcon} alt="buscar" className="buscarConversa-Icon" />
          <a href="#">Perfil</a>
          <img src={userIcon} alt="Perfil" className="perfil-icon" />
        </nav>
      </header>

      <main className="lista-expressoes">
        <h2> <img src={ordenacaoIcon} alt="Logo" className="ordenacaoIcon" />Ordem alfabética</h2>
        <div className="grid-cards">
          {expressoes.map((exp, index) => (
            <div className="card-exp" key={index}>
              <div className="topo-card">
                <h3>{exp.titulo}</h3>
                <img src={bookmark} alt="Salvar" className="icon-bookmark" />
              </div>
              <p className="desc">{exp.desc}</p>
              <p className="exemplo">"{exp.exemplo}"</p>
              <div className="reacoes">
                <span>
                  <img src={likeIcon} alt="Curtir" /> {exp.likes}
                </span>
                <span>
                  <img src={dislikeIcon} alt="Não curtir" className="dislike" /> {exp.dislikes}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default TelaDicionario;
