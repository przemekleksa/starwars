import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './List.css'

const List = ({elements} : {elements: any[]}) => {
    console.log(elements)

    return(
        <ul className="people-list">
            {elements.map(el => {
                const id = el.url.split("/").filter(String).slice(-1)[0]
                return (
                    <NavLink to={`details/${id}`} className="sw-el-link" key={id}>
                        <li 
                            className="sw-el"
                            >{el.name || el.title}</li>
                    </NavLink>
                )
            })}
            
        </ul>
    )
}


export default List;

