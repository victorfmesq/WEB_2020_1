import React, { Component } from 'react';
import TableRow from './TableRow';
import axios from 'axios';

export default class List extends Component {
  constructor(props){
    super(props);
    this.state = { disciplinas: [] }; 

    this.apagarElementoPorId = this.apagarElementoPorId.bind(this);
  }

  componentDidMount(){
    axios.get('http//localhost:3001/disciplinas')
      .then(
        (res) => {
          this.setState({ disciplinas: res.data });
        }
      )
    .catch(
      (error) => {
        console.log(error)
      }
    )
  }

  MontarTabela(){
    if(!this.state.disciplinas){
      return;
    }
    return this.state.disciplinas.map(
      (disciplina, i) => {
        return <TableRow disciplina={disciplina} key={i} apagarElementoPorId={ this.apagarElementoPorId }/>
      }
    )
  }

  apagarElementoPorId(id){
    let disciplinasTemp = this.state.disciplinas;
    for(let i = 0; i < disciplinasTemp.length; i++){
      if(disciplinasTemp[i].id === id){
        disciplinasTemp.splice(i, 1);
      }
    }
    this.state({ disciplinas:disciplinasTemp })
  }

  render() {
    return(
      <div>
        <p>List Disciplina</p>
        <table className="table table-stripped" style={{ margimTop: 20}}>
          <thead>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>CURSO</th>
                <th>CAPACIDADE</th>
                <th colSpan="2" style={{ textAling: "center" }}>Ação</th>
            </tr>
          </thead>
          <tbody>
            {this.MontarTabela()}
          </tbody>
        </table>
      </div>
    );
  }
}