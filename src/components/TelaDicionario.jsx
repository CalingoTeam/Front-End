import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
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
import ordenacaoIcon from "../assets/ordenacao.svg";

function TelaDicionario() {
  const [ordemAscendente, setOrdemAscendente] = useState(true);

  const [expressoes, setExpressoes] = useState([
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
      exemplo: "Pare de arengar e resolve logo isso!",
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
  ]);

  const ordenarExpressoes = () => {
    const ordenado = [...expressoes].sort((a, b) => {
      return ordemAscendente
        ? a.titulo.localeCompare(b.titulo)
        : b.titulo.localeCompare(a.titulo);
    });
    setExpressoes(ordenado);
    setOrdemAscendente(!ordemAscendente);
  };

  return (
    <div className="tela-dicionario">
      <Header />

      <main className="lista-expressoes">
        <h2 onClick={ordenarExpressoes}>
          <img src={ordenacaoIcon} alt="Ordenar" className="ordenacaoIcon" />
          Ordem alfabética
        </h2>

        <div className="grid-cards">
          {expressoes.map((exp, index) => (
            <div className="card-exp" key={index}>
              <div className="topo-card">
                <h3>{exp.titulo}</h3>
                <img src={bookmark} alt="Salvar" className="icon-bookmark" />
              </div>
              <p className="desc">{exp.desc}</p>
              <p className="exemplo">"{exp.exemplo}"</p>
              <div className="reacoes-telaDicionario">
                <span>
                  {exp.likes} <img src={likeIcon} alt="Curtir" />
                </span>
                <span className="divisor" />
                <span>
                  {exp.dislikes} <img src={dislikeIcon} alt="Não curtir" />
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
