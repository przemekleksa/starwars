import React from 'react';
import { NavLink } from 'react-router-dom';
import Details from '../Details';
import './List.css'

const List = ({elements} : {elements: any[]}) => {
    
    return(
        <div>
            
            {elements.map(el => {
                return (
                    <div>
                    <NavLink to={`/details/${el.name}`} className="sw-el-link">
                        <div 
                            key={el.name || el.title} 
                            className="sw-el"
                            >{el.name || el.title}</div>
                            {/* <Details dets={el}/> */}
                    </NavLink>
                    </div>
                )
            })}
            
        </div>
    )
}


export default List;

