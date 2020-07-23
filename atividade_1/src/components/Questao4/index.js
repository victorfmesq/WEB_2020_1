import React, {Component} from 'react';
import {Badge} from 'react-bootstrap';

export default class Questao4 extends Component{
    render(){
        return(
            <div>
                <h1>
                    Nome: <Badge variant="secondary">{this.props.nome}</Badge>
                </h1>
                <h1>
                    Curso: <Badge variant="secondary">{this.props.curso}</Badge>
                </h1>
                <h1>
                    Cidade: <Badge variant="secondary">{this.props.cidade}</Badge>
                </h1>
            </div>
        );
    }
}