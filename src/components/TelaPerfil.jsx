import React from 'react';
import './TelaPerfil.css';
import Header from './Header';

import User from '../assets/User.svg';
import Chapeu from "../assets/Chapeu.png"
import bookmark from '../assets/bookmark.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

const TelaPerfil = () => {
  return (
    <div className="tela-perfil">
      <Header />
      <div className="perfil-container">
        <div className="perfil-lateral">
          <img src={Chapeu} alt="chapeu-cangaceiro" className="chapeu-Cangaceiro" />
          <div className="input-group">
            <label> <span>✎</span></label>
            <input type="text" placeholder="Apelido" />
          </div>
          <div className="input-group">
            <label> <span>✎</span></label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <label><span>✎</span></label>
            <input type="password" placeholder="Senha" />
          </div>
          <div className="input-group">
            <label><span>✎</span></label>
            <input type="text" placeholder="Cidade" />
          </div>
          <div className="input-group">
            <label><span>✎</span></label>
            <input type="text" placeholder="Estado" />
          </div>
          <button className="sugerir-btn">Sugerir Expressão</button>
        </div>

        <div className="perfil-conteudo">
          <div className="expressao-colunas">
            <div className="coluna">
              <h2>Expressões Favoritadas</h2>

              <div className="expressao-card">
                <h3>Aperrear</h3>
                <p>Incomodar, irritar</p>
                <p className="exemplo">- Deixa de me aperrear, visse</p>
                <div className="interacoes">
                  <img src={like} alt="like" />
                  <span>68</span>
                  <img src={dislike} alt="dislike" />
                  <span>14</span>
                  <img src={bookmark} alt="favorito" />
                </div>
              </div>

              <div className="expressao-card">
                <h3>Arrudear</h3>
                <p>Dar a volta, contornar algo</p>
                <p className="exemplo">- Pra chegar lá, tem que arrudear.</p>
                <div className="interacoes">
                  <img src={like} alt="like" />
                  <span>82</span>
                  <img src={dislike} alt="dislike" />
                  <span>7</span>
                  <img src={bookmark} alt="favorito" />
                </div>
              </div>
            </div>

            <div className="coluna">
              <h2>Histórico de Curtidas</h2>

              <div className="expressao-card">
                <h3>Estrovar</h3>
                <p>Atrapalhar, incomodar</p>
                <p className="exemplo">- Sai da frente, tu só estrova!</p>
                <div className="interacoes">
                  <img src={like} alt="like" />
                  <span>49</span>
                  <img src={dislike} alt="dislike" />
                  <span>12</span>
                  <img src={bookmark} alt="favorito" />
                </div>
              </div>

              <div className="expressao-card">
                <h3>Encangado</h3>
                <p>Carregado, sobrecarregado</p>
                <p className="exemplo">- Tô encangado de coisa pra fazer.</p>
                <div className="interacoes">
                  <img src={like} alt="like" />
                  <span>128</span>
                  <img src={dislike} alt="dislike" />
                  <span>2</span>
                  <img src={bookmark} alt="favorito" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelaPerfil;
