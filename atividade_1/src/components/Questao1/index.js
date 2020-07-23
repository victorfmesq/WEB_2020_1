import React from 'react';

export default props =>{
    return(
        <div>
            <h2>{props.nome}</h2>
            <h3>{props.curso}</h3>
            <h3>{props.cidade}</h3>
        </div>
    );
}