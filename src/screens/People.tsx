import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from '../components/List/List'
import { getPeople } from '../store/people/actions'
import { selectPeople } from '../store/people/selectors'

const People = () => {
    const dispatch = useDispatch()
    const people = useSelector(selectPeople)

    useEffect(() => {
        dispatch(getPeople())
    }, [dispatch])
    return (
        <div>
            <List elements={people} />
        </div>
    )
}

export default People