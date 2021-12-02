import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectPerson } from '../../store/people/selectors'

const Details = () => {
    const { id, category } = useParams()
    const person = useSelector(selectPerson)
    
    useEffect(() => {
        console.log(person)
    }, [id])
    
    return (
        <div className="details">
   
            
        </div>
    )
}

export default Details