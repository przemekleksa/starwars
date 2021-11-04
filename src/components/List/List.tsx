import React from 'react';

const List = ({elements} : {elements: any[]}) => {
    
    return(
        <div>
            {elements.map(el => {
                return <div>{el.name}</div>
            })}
        </div>
    )
}


export default List;

