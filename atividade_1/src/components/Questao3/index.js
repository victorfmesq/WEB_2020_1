import React from 'react';

export default props =>{
    return(
        <div>
            {React.Children.map(props.children, questao1 =>{
                return React.cloneElement(questao1, {...props});
            })}
        </div>
    );
}
