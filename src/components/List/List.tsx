import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './List.css'

const List = ({elements} : {elements: any[]}) => {
    
    return(
        <div>
            
            {elements.map(el => {
                const id = el.url.split("/").filter(String).slice(-1)[0]
                return (
                    <NavLink to={`details/${id}`} className="sw-el-link" key={id}>
                        <div 
                            className="sw-el"
                            >{el.name || el.title}</div>
                    </NavLink>
                )
            })}
            
        </div>
    )
}


export default List;

