import React from 'react';
import ReactDOM from 'react-dom';
import Questao1 from './components/Questao1';
import Questao2 from './components/Questao2';
import Questao3 from './components/Questao3';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <h1>Questão 1:</h1>
    <Questao3 nome="João Victor" curso="SI" cidade="Fortaleza">
      <Questao1/>
    </Questao3>
    <br/>
    <h1>Questão 2:</h1>
    <Questao2/>
    <br/>
    <h1>Questão 3:</h1>
    <h2>É a questao 1 que foi modificada...</h2>
    <br/>
    <h1>Questão 4:</h1>
    <h2>É a questao 2 que foi modificada...</h2>
    <br/>
    <h1>Questao 5:</h1>
  </div>, 
document.getElementById('root'));