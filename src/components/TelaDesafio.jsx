import React from 'react';
import './TelaDesafio.css';
import Header from './Header';
import Button from "./Button";
import iguana from '../assets/iguana-desafio.png';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import perfil from '../assets/foto-perfil.png';

const usuarios = [
  "JEanNego",
  "KitCat",
  "OxeMaster",
  "Laurra",
  "AperreadoBR",
  "Bibi"
]

const frases = [
  "Ô tabacudo, tu não sabe nem fritar um ovo!",
  "Deixa de ser tabacudo e presta atenção, rapaz!",
  "Era só apertar o botão certo, tabacudo!",
  "Eu avisei pra tu não fazer isso, tabacudo!",
  "Ô tabacudo, olha o que tu fez agora!",
  "Se passar mais vergonha, vai ganhar o prêmio de tabacudo do ano!",
];

const usuariosTop3 = [
  "LampiãoCode",
  "TabacudoSupremo",
  "CuscuzKing"
]

const top3 = [
  "Só um tabacudo pra tropeçar no próprio pé!",
  "O tabacudo foi botar gasolina e esqueceu o carro em casa!",
  "Oxe, tu tá mais perdido que tabacudo em prova de física!",
];

export default function TelaDesafio() {
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
            <li>
              Se o usuário mandar algo que vá contra a política da plataforma, receberá uma puxada de orelha. Caso o usuário receba 3 puxadas, sua conta será arrebatada da aplicação.
            </li>
            <li>
              As 3 melhores frases serão incluídas em nosso dicionário como exemplos de uso.
            </li>
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
                      <span>45</span>
                      <img src={like} alt="like" />
                      <h3>|</h3>
                      <span>13</span>
                      <img src={dislike} alt="dislike" />
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
                      <span>45</span>
                      <img src={like} alt="like" />
                      <h3>|</h3>
                      <span>13</span>
                      <img src={dislike} alt="dislike" />
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
