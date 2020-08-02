import React from 'react';
import {heroLink, enemyLink} from './constantes'
import {Badge} from 'react-bootstrap';

const Hero = props => {
    return(
        <div>
            <h2>{props.name} <Badge variant="secondary">Perigoso!</Badge></h2>
            <img src={props.link} alt=""/>
        </div>
    );
}

const Enemy = props => {
    return(
        <div>
            <h2>{props.name} <Badge variant="secondary">Perigoso!</Badge></h2>
            <img src={props.link} alt=""/>
        </div>
    );
}

const Arena = props => {
    return(
        <div>
            <Hero name='Shaggy' link={heroLink}/>,
            <Enemy name='Scooby Doo' link={enemyLink}/>,
        </div>
    );
}

export {Hero, Enemy, Arena};