import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { getPeople } from './store/people/actions';
import {selectPeople} from './store/people/selectors'
import { getPlanets } from './store/planets/actions';

function App() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);

  useEffect(() => {
    dispatch(getPeople())
  }, []);
  useEffect(() => {
    dispatch(getPlanets())
  }, []);
  useEffect(() => {
    console.log(people)
  }, [people])


  return (
    <div className="App">
  
    </div>
  );
}

export default App;
