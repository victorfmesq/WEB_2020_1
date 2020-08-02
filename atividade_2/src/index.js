import React from 'react';
import ReactDOM from 'react-dom';
import {Arena} from './components/Questao1'
import World from './components/Questao3' 
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <World>
    <Arena/>,
    <Arena/>,
    <Arena/>,
  </World>,
  document.getElementById('root')
);
