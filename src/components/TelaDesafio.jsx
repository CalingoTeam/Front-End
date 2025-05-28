import React, { useState } from 'react';
import './TelaDesafio.css';
import Header from './Header';
import Button from "./Button";
import iguana from '../assets/iguana-desafio.png';
import likeIcon from '../assets/like.svg';
import dislikeIcon from '../assets/dislike.svg';
import perfil from '../assets/foto-perfil.png';

const usuarios = ["JEanNego", "KitCat", "OxeMaster", "Laurra", "AperreadoBR", "Bibi"];
const frases = [
  "Ô tabacudo, tu não sabe nem fritar um ovo!",
  "Deixa de ser tabacudo e presta atenção, rapaz!",
  "Era só apertar o botão certo, tabacudo!",
  "Eu avisei pra tu não fazer isso, tabacudo!",
  "Ô tabacudo, olha o que tu fez agora!",
  "Se passar mais vergonha, vai ganhar o prêmio de tabacudo do ano!",
];
const usuariosTop3 = ["LampiãoCode", "TabacudoSupremo", "CuscuzKing"];
const top3 = [
  "Só um tabacudo pra tropeçar no próprio pé!",
  "O tabacudo foi botar gasolina e esqueceu o carro em casa!",
  "Oxe, tu tá mais perdido que tabacudo em prova de física!",
];

const initialReactions = [
  { like: 12, dislike: 4 },
  { like: 30, dislike: 3 },
  { like: 7, dislike: 1 },
  { like: 18, dislike: 6 },
  { like: 25, dislike: 9 },
  { like: 5, dislike: 2 }
];

const initialTopReactions = [
  { like: 88, dislike: 2 },
  { like: 65, dislike: 5 },
  { like: 77, dislike: 3 }
];

export default function TelaDesafio() {
  const [reactions, setReactions] = useState(initialReactions);
  const [selected, setSelected] = useState(Array(frases.length).fill(null));
  const [topReactions, setTopReactions] = useState(initialTopReactions);
  const [topSelected, setTopSelected] = useState(Array(top3.length).fill(null));

  const handleReaction = (index, type, isTop = false) => {
    const updatedReactions = isTop ? [...topReactions] : [...reactions];
    const updatedSelected = isTop ? [...topSelected] : [...selected];

    if (updatedSelected[index] === type) {
      updatedReactions[index][type] -= 1;
      updatedSelected[index] = null;
    } else {
      if (updatedSelected[index] === 'like') updatedReactions[index].like -= 1;
      if (updatedSelected[index] === 'dislike') updatedReactions[index].dislike -= 1;

      updatedReactions[index][type] += 1;
      updatedSelected[index] = type;
    }

    isTop ? (setTopReactions(updatedReactions), setTopSelected(updatedSelected)) :
            (setReactions(updatedReactions), setSelected(updatedSelected));
  };

  return (
    <div className="tela-desafio">
      <Header />
      <div className="flex">
        <div className="desafio-header">
          <h2>Desafio Arretado</h2>
          <p><strong>Palavra da Semana:</strong> <span className="palavra">Tabacudo</span></p>
          <p><strong>Sugira a sua frase mais criativa seguindo as instruções e regras abaixo:</strong></p>
          <ul className="regras">
            <li>É permitido o envio de apenas uma frase por desafio.</li>
            <li>É proibido o envio de propagandas e links externos.</li>
            <li>Se o usuário mandar algo que vá contra a política da plataforma, receberá uma puxada de orelha. Caso o usuário receba 3 puxadas, sua conta será arrebatada da aplicação.</li>
            <li>As 3 melhores frases serão incluídas em nosso dicionário como exemplos de uso.</li>
          </ul>
          <input type="text" placeholder="Digite sua frase" className="input-frase" />
        </div>
        <img src={iguana} alt="Iguana" className="iguana-desafio" />
      </div>
      <div className="background">
        <div className="desafio-content">
          <div className="frases-lista">
            {frases.map((frase, i) => (
              <div key={i} className="frase">
                <div className="usuarios">
                  <img src={perfil} alt="foto-perfil" className="foto-perfil"/>
                  <div>
                    <p><strong>{usuarios[i]}</strong></p>
                    <p>{frase}</p>
                    <div className="reacoes">
                      <span>{reactions[i].like}</span>
                      <button className="icon-button" onClick={() => handleReaction(i, 'like')}>
                        <img src={likeIcon} alt="like" style={{ filter: selected[i] === 'like' ? 'brightness(0)' : 'none' }} />
                      </button>
                      <h3>|</h3>
                      <span>{reactions[i].dislike}</span>
                      <button className="icon-button" onClick={() => handleReaction(i, 'dislike')}>
                        <img src={dislikeIcon} alt="dislike" style={{ filter: selected[i] === 'dislike' ? 'brightness(0)' : 'none' }} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="frases-lista">
            <h2>As três Mais Arretadas</h2>
            {top3.map((frase, i) => (
              <div key={i} className="frase">
                <div className="usuarios">
                  <img src={perfil} alt="foto-perfil" className="foto-perfil"/>
                  <div>
                    <p><strong>{usuariosTop3[i]}</strong></p>
                    <p>{frase}</p>
                    <div className="reacoes">
                      <span>{topReactions[i].like}</span>
                      <button className="icon-button" onClick={() => handleReaction(i, 'like', true)}>
                        <img src={likeIcon} alt="like" style={{ filter: topSelected[i] === 'like' ? 'brightness(0)' : 'none' }} />
                      </button>
                      <h3>|</h3>
                      <span>{topReactions[i].dislike}</span>
                      <button className="icon-button" onClick={() => handleReaction(i, 'dislike', true)}>
                        <img src={dislikeIcon} alt="dislike" style={{ filter: topSelected[i] === 'dislike' ? 'brightness(0)' : 'none' }} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}