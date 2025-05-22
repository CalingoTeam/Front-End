import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaPerfil.css';
import Header from './Header';
import Button from "./Button";

import pencil from "../assets/pencil.svg";
import Chapeu from "../assets/Chapeu.png";
import BolaAmarela from "../assets/BolaAmarela.png";
import Caveira from "../assets/Caveira.svg";
import bookmark from '../assets/bookmark.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

const TelaPerfil = () => {
  const navigate = useNavigate();

  const redirecionarParaSugestao = () => {
    navigate("/sugestao");
  };

  return (
    <div className="tela-perfil">
      <Header />
      <div className="perfil-container">
        <div className="perfil-lateral">
          <img src={Chapeu} alt="chapeu-cangaceiro" className="chapeu-Cangaceiro" />
          <img src={BolaAmarela} alt="bola amarela" className="bola-amarela" />
          <img src={Caveira} alt="Caveira" className="caveira" />

          <div className="input-group-telaPerfil">
            <label><img src={pencil} alt="Editar" className="pencil" /></label>
            <input type="text" placeholder="Apelido" />
          </div>
          <div className="input-group-telaPerfil">
            <label><img src={pencil} alt="Editar" className="pencil" /></label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group-telaPerfil">
            <label><img src={pencil} alt="Editar" className="pencil" /></label>
            <input type="password" placeholder="Senha" />
          </div>
          <div className="input-group-telaPerfil">
            <label><img src={pencil} alt="Editar" className="pencil" /></label>
            <input type="text" placeholder="Cidade" />
          </div>
          <div className="input-group-telaPerfil">
            <label><img src={pencil} alt="Editar" className="pencil" /></label>
            <input type="text" placeholder="Estado" />
          </div>

          <Button onClick={redirecionarParaSugestao}>Sugerir Expressão</Button>
        </div>

        <div className="perfil-conteudo">
          <div className="expressao-colunas">
            <div className="coluna-telaPerfil">
              <h2 className="titulo-TelaPerfil">Expressões Favoritadas</h2>

              <div className="expressao-card">
                <h3>Aperrear</h3>
                <p>Incomodar, irritar</p>
                <p className="exemplo">- Deixa de me aperrear, visse</p>
                <div className="interacoes-telaPerfil">
                  <span>68</span>
                  <img src={like} alt="Curtir" className="like-telaPerfil" />
                  <span className="divisor"></span>
                  <span>14</span>
                  <img src={dislike} alt="Descurtir" className="dislike-telaPerfil" />
                  <img src={bookmark} alt="Favorito" className="bookmark-telaPerfil" />
                </div>
              </div>

              <div className="expressao-card">
                <h3>Arrudear</h3>
                <p>Dar a volta, contornar algo</p>
                <p className="exemplo">- Pra chegar lá, tem que arrudear.</p>
                <div className="interacoes-telaPerfil">
                  <span>82</span>
                  <img src={like} alt="Curtir" className="like-telaPerfil" />
                  <span className="divisor"></span>
                  <span>7</span>
                  <img src={dislike} alt="Descurtir" className="dislike-telaPerfil" />
                  <img src={bookmark} alt="Favorito" className="bookmark-telaPerfil" />
                </div>
              </div>
            </div>

            <div className="coluna-telaPerfil">
              <h2 className="titulo-HistoricoCurtidas">Histórico de Curtidas</h2>

              <div className="expressao-card">
                <h3>Estrovar</h3>
                <p>Atrapalhar, incomodar</p>
                <p className="exemplo">- Sai da frente, tu só estrova!</p>
                <div className="interacoes-telaPerfil">
                  <span>49</span>
                  <img src={like} alt="Curtir" className="like-telaPerfil" />
                  <span className="divisor"></span>
                  <span>12</span>
                  <img src={dislike} alt="Descurtir" className="dislike-telaPerfil" />
                  <img src={bookmark} alt="Favorito" className="bookmark-telaPerfil" />
                </div>
              </div>

              <div className="expressao-card">
                <h3>Encangado</h3>
                <p>Carregado, sobrecarregado</p>
                <p className="exemplo">- Tô encangado de coisa pra fazer.</p>
                <div className="interacoes-telaPerfil">
                  <span>128</span>
                  <img src={like} alt="Curtir" className="like-telaPerfil" />
                  <span className="divisor"></span>
                  <span>2</span>
                  <img src={dislike} alt="Descurtir" className="dislike-telaPerfil" />
                  <img src={bookmark} alt="Favorito" className="bookmark-telaPerfil" />
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
