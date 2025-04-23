import React, { useState } from "react";
import "./components/Login.css";
import iguana from "./assets/iguana.png";
import bola from "./assets/bola.png";
import Cactu1 from "./assets/Cactu1.png";
import Cactu2 from "./assets/Cactu2.png";
import Cactu3 from "./assets/Cactu3.png";
import Cactu4 from "./assets/Cactu4.png";
import googleIcon from "./assets/google.svg";
import facebookIcon from "./assets/facebook.svg";

function App() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className={`container ${isRegistering ? "register-mode" : ""}`}>
      <section className="left-panel">
        <img src={iguana} alt="Iguana" className="iguana" />
        <img src={bola} alt="Bola" className="bola" />

        {!isRegistering ? (
          <button className="toggle-btn" onClick={() => setIsRegistering(true)}>
            Cadastre-se aqui
          </button>
        ) : (
          <button className="toggle-btn" onClick={() => setIsRegistering(false)}>
            Entrar
          </button>
        )}
        <div className="cactus-group">
          <img src={Cactu1} alt="Cactus 1" />
          <img src={Cactu2} alt="Cactus 2" />
          <img src={Cactu3} alt="Cactus 3" />
          <img src={Cactu4} alt="Cactus 4" />
        </div>
      </section>

      <section className="right-panel">
        {!isRegistering ? (
          <div className="login-form">
            <h2>Entrar</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Entrar</button>
            <div className="socials">
              <img src={googleIcon} alt="Google" />
              <img src={facebookIcon} alt="Facebook" />
            </div>
          </div>
        ) : (
          <div className="register-form">
            <h2>Cadastro</h2>
            <input type="text" placeholder="Apelido" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <div className="dropdowns">
              <select><option>Cidade</option></select>
              <select><option>Estado</option></select>
            </div>
            <button>Cadastrar</button>
            <div className="socials">
              <img src={googleIcon} alt="Google" />
              <img src={facebookIcon} alt="Facebook" />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
