import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TelaInicial.css";
import Header from "./Header";
import logo from "../assets/Logo.png";
import lupa from "../assets/lupa.svg";
import userIcon from "../assets/User.svg";
import cactoGroup from "../assets/CactoGroup.svg";
import likeIcon from "../assets/like.svg";
import dislikeIcon from "../assets/dislike.svg";
import fogoIcon from "../assets/foguinho.svg";
import iguana from "../assets/iguana.png";
import buscarConversaIcon from "../assets/buscarConversa.svg";

function TelaInicial() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (busca.trim() !== "") {
      navigate(`/significado/${busca.trim()}`);
    }
  };

  const expressoes = [
    {
      titulo: "Arrudear",
      desc: "Dar a volta, contornar algo",
      exemplo: "Pra chegar lá, tem que arrudear.",
      likes: 82,
      dislikes: 7,
    },
    {
      titulo: "Aperrear",
      desc: "Incomodar, irritar",
      exemplo: "Deixe de me aperrear, visse.",
      likes: 88,
      dislikes: 14,
    },
    {
      titulo: "Encangado",
      desc: "Carregado, sobrecarregado",
      exemplo: "Tô encangado de coisa pra fazer.",
      likes: 128,
      dislikes: 6,
    },
    {
      titulo: "Estrovar",
      desc: "Atrapalhar, incomodar",
      exemplo: "Sai da frente, tu só estrova!",
      likes: 40,
      dislikes: 32,
    },
  ];

  return (
    <div className="tela-inicial">
      <Header />

      <main className="conteudo">
        <section className="expressao-do-dia">
          <div className="card-expressao">
            <div className="titulo-card">
              <h2>
                Expressão do dia |{" "}
                <Link to="/significado/Tabacudo">
                  <span>Tabacudo</span>
                </Link>
              </h2>
            </div>
            <img src={cactoGroup} className="cactoGroup" alt="Expressão do dia" />
            <div className="significado">
              <h3>Significado</h3>
              <p>
                Expressão informal que significa bobo, tolo ou ingênuo. Pode ser usada de forma cômica ou pejorativa, dependendo do tom e do contexto. Em algumas situações, também pode indicar alguém desastrado ou que comete erros frequentes.
              </p>
            </div>
          </div>
        </section>

        <section className="expressoes-em-alta">
          <h2>Expressões em alta</h2>
          <div className="grade-expressoes">
            <div className="coluna-esquerda">
              {[0, 1].map((i) => {
                const exp = expressoes[i];
                return (
                  <div className="expressao" key={i}>
                    <Link to={`/significado/${exp.titulo}`}>
                      <h3>{exp.titulo}</h3>
                    </Link>
                    <p className="desc">{exp.desc}</p>
                    <p className="exemplo">"{exp.exemplo}"</p>
                    <div className="reacoes">
                      <span>
                        <img src={likeIcon} alt="Curtir" /> {exp.likes}
                      </span>
                      <span>
                        <img src={dislikeIcon} className="dislike" alt="Não curtir" /> {exp.dislikes}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="coluna-direita">
              {[2, 3].map((i) => {
                const exp = expressoes[i];
                return (
                  <div className="expressao" key={i}>
                    <Link to={`/significado/${exp.titulo}`}>
                      <h3>{exp.titulo}</h3>
                    </Link>
                    <p className="desc">{exp.desc}</p>
                    <p className="exemplo">"{exp.exemplo}"</p>
                    <div className="reacoes">
                      <span>
                        <img src={likeIcon} alt="Curtir" /> {exp.likes}
                      </span>
                      <span>
                        <img src={dislikeIcon} className="dislike" alt="Não curtir" /> {exp.dislikes}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TelaInicial;
