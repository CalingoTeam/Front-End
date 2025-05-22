import React from 'react';
import './TelaSugestao.css';
import Header from './Header';
import Button from './Button';

const TelaSugestao = () => {
  return (
    <div className="tela-sugestao">
      <Header />
      <main className="container-sugestao">
        <div className="formulario-sugestao">
          <h2>Sugira sua expressão</h2>
          <form>
            <div className="input-group">
              <label></label>
              <input type="text" placeholder='Nome da Expressão' />
            </div>
            <div className="input-group">
              <label></label>
              <input type="text" placeholder='Significado' />
            </div>
            <div className="input-group">
              <label></label>
              <input type="text" placeholder='Aplicação numa frase'/>
            </div>
            <div className="input-group">
              <label></label>
              <input type="text" placeholder='Fonologia' />
            </div>
            <div className="input-group">
              <label></label>
              <input type="text" placeholder='Sinônimos'/>
            </div>
            <div className="input-group">
              <label></label>
              <input type="text" placeholder='Cidade'/>
            </div>
            <div className="input-group">
              <label></label>
              <input type="text" placeholder='Estado'/>
            </div>
            <Button className="btn-telaSugestao">Sugerir Expressão</Button>
          </form>
        </div>

        <div className="expressoes-sugeridas">
          <div className="expressao">Encangado</div>
          <div className="expressao">Arrudear</div>
          <div className="expressao">Estrovar</div>
        </div>
      </main>
    </div>
  );
};

export default TelaSugestao;
