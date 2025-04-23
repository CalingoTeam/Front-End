import React from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import googleIcon from "../assets/google.svg.svg";
import facebookIcon from "../assets/facebook.svg.svg";
import iguana from "../assets/iguana.png";
import cactu1 from "../assets/Cactu1.png";
import cactu2 from "../assets/Cactu2.png";
import cactu3 from "../assets/Cactu3.png";
import cactu4 from "../assets/Cactu4.png";
import bola from "../assets/bola.png";


export default function Login() {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="left-content">
          <img src={iguana} alt="Iguana" className="iguana" />
          <img src={bola} alt="bola" className="bola" />
          <button className="register-button">Cadastre-se aqui</button>
          <div className="cactus-row">
            <img src={cactu1} alt="Cactus 1" />
            <img src={cactu2} alt="Cactus 2" />
            <img src={cactu3} alt="Cactus 3" />
            <img src={cactu4} alt="Cactus 4" />
          </div>
        </div>
      </div>

      <div className="right-panel">
        <div className="login-box">
          <h2>Entrar</h2>
          <div className="input-container">
            <input type="email" placeholder="Email" />
            <FaUser className="icon" />
          </div>
          <div className="input-container">
            <input type="password" placeholder="***********" />
            <FaLock className="icon" />
          </div>
          <button className="login-button">Entrar</button>
          <div className="social-icons">
            <img src={googleIcon} alt="Google" />
            <img src={facebookIcon} alt="Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}
