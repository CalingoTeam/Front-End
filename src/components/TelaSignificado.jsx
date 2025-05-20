// src/components/TelaSignificado.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header"
import "./TelaSignificado.css";
import logo from "../assets/Logo.png";
import iguana from "../assets/iguana.png";
import lupa from "../assets/lupa.svg";
import userIcon from "../assets/User.svg";
import bookmark from "../assets/bookmark.svg";
import likeIcon from "../assets/like.svg";
import dislikeIcon from "../assets/dislike.svg";
import fogoIcon from "../assets/foguinho.svg";
import buscarConversaIcon from "../assets/buscarConversa.svg";

const expressoes = {
  Arrudear: {
    significado: "Dar a volta, contornar algo",
    fonologia: ["/a.ʁu.deˈaɾ/", "A-rru-de-ar"],
    frases: [
      "Pra chegar lá, tem que arrudear.",
      "Arrudeia o quarteirão pra não pegar trânsito."
    ],
    sinonimos: ["Contornar", "Rodear", "Desviar"],
    likes:82,
    dislikes: 7, 
  },
  Aperrear: {
    significado: "Incomodar, irritar",
    fonologia: ["/a.pe.ʁeˈaɾ/", "A-pe-rre-ar"],
    frases: [
      "Deixe de me aperrear, visse.",
      "Menino, tu só vive aperreando!"
    ],
    sinonimos: ["Irritar", "Atrapalhar", "Atazanar"],
    likes:88,
    dislikes: 14,
  },
  Encangado: {
    significado: "Carregado, sobrecarregado",
    fonologia: ["/ẽ.kãˈɡa.du/", "En-can-ga-do"],
    frases: [
      "Tô encangado de coisa pra fazer.",
      "Ele vive encangado de responsabilidade."
    ],
    sinonimos: ["Atarefado", "Sobrecarregado", "Carregado"],
    likes:128,
    dislikes: 6,
  },
  Estrovar: {
    significado: "Atrapalhar, incomodar",
    fonologia: ["/es.tɾoˈvaɾ/", "Es-tro-var"],
    frases: [
      "Sai da frente, tu só estrova!",
      "Tu vai estrovar ou ajudar?"
    ],
    sinonimos: ["Atrapalhar", "Obstruir", "Incomodar"],
    likes:40,
    dislikes: 32,
  },
  Tabacudo: {
    significado: "Característica de quem tem modos grosseiros; bobo, ignorante, caipira. ",
    fonologia: ["/ta.ba.ˈku.du/", "Ta-ba-cu-do"],
    frases: [
      "Deixa de ser tabacudo, homem! Era só apertar o botão certo.",
      "Rapaz, tu é muito tabacudo mesmo, como é que tu esquece o aniversário da namorada?"
    ],
    sinonimos: ["Abestalhado, Leso, Abestado, Mané, Bocó, Besta."],
    likes:45,
    dislikes: 13,
  },
  
};

function TelaSignificado() {
  const { titulo } = useParams();
  const expressao = expressoes[titulo];

  if (!expressao) return <h2>Expressão não encontrada.</h2>;

  return (
    <div className="tela-significado">
      <Header />

      <main>
        <div className="expressao-box">
          <div className="bloco-titulo">
            <h3>{titulo}</h3>
            <div className="reacoes-telaSignificado">
            <span className="reacao-item">
            <span className="reacao-count">{expressao.likes}</span>
            <img src={likeIcon}  className="like-telaSignificado" alt="Curtir" />
              <div className="divisor" />
           </span>
           <span className="reacao-item">
           <span className="reacao-count">{expressao.dislikes}</span>
           <img src={dislikeIcon} className="dislike-telaSignificado" alt="Não curtir" />
           </span>
  <img src={bookmark} alt="Perfil" className="bookmark" />
</div>

            

          </div>
          <div className="bloco-significado">
            <h3>Significado</h3>
            <p>{expressao.significado}</p>
          </div>
          <div className="bloco-fonologia">
            <h3>Fonologia</h3>
            {expressao.fonologia.map((f, idx) => (
              <p key={idx}>{f}</p>
            ))}
          </div>
        </div>

        
          <div className="titulo-Frase">
            <h3>Uso em frase</h3>
            </div>
          <div className="bloco-frase">
          {expressao.frases.map((f, idx) => (
            <p key={idx}>"{f}"</p>
          ))}
          </div>

        
          <div className="titulo-Sinonimo">
            <h3>Sinônimos</h3>
          </div>
          <div className="bloco-sinonimos">
          <p>{expressao.sinonimos.join(", ")}</p>
          </div>
      </main>
    </div>
  );
}

export default TelaSignificado;
