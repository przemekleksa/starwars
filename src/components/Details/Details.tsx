import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPersonDetails } from '../../store/people/actions'
import { selectPerson } from '../../store/people/selectors'

const Details = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const person = useSelector(selectPerson)
    
    useEffect(() => {
        if (id) {
            dispatch(getPersonDetails(id))
        }
    }, [id])

    if (!id) {
        return (
            <div>
                there is no id
            </div>
        )
    }
    
    return (
        <div className="details">
            <h2>{person.name}</h2>
            <p>{person.mass} kg</p>
            <p>{person.color}</p>
        </div>
    )
}

export default Details