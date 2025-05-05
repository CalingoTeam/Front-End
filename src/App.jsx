import React, { useState } from "react";
import "./index.css";
import "./components/Login.css";
import "./components/Cadastro.css";
import iguana from "./assets/iguana.png";
import bola from "./assets/bola.png";
import cacto1 from "./assets/Cactu1.png";
import cacto2 from "./assets/Cactu2.png";
import cacto3 from "./assets/Cactu3.png";
import cacto4 from "./assets/Cactu4.png";
import cacto5 from "./assets/Cactu5.png";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";


function App() {
  const [cadastrando, setCadastrando] = useState(false);

  return (
    <div className={`container ${cadastrando ? "modo-cadastro" : ""}`}>
      <section className="painel-esquerdo">
        <img src={iguana} alt="Iguana" className="iguana" />
        <img src={bola} alt="Bola" className="bola" />

        <button className="botao-alternar" onClick={() => setCadastrando(!cadastrando)}>
          {cadastrando ? "Entrar" : "Cadastre-se aqui"}
        </button>

        <div className="grupo-cactos">
          <img src={cacto1} alt="Cacto 1" className="cacto1" />
          <img src={cacto2} alt="Cacto 2" className="cacto2" />
          <img src={cacto3} alt="Cacto 3" className="cacto3" />
          <img src={cacto4} alt="Cacto 4" className="cacto4" />
          <img src={cacto5} alt="Cacto 5" className="cacto5" />
        </div>
      </section>

      <section className="painel-direito">
        {cadastrando ? <Cadastro /> : <Login />}
      </section>
    </div>
  );
}

export default App;
