import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { getPeople } from './store/people/actions';
import {selectPeople} from './store/people/selectors'
import { getPlanets } from './store/planets/actions';
import { selectPlanets } from './store/planets/selectors';
import { selectFilms } from './store/films/selectors';
import { getFilms } from './store/films/actions';

function App() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const planets = useSelector(selectPlanets);
  const films = useSelector(selectFilms)

  useEffect(() => {
    dispatch(getPeople())
  }, []);
  useEffect(() => {
    dispatch(getPlanets())
  }, []);
  useEffect(() => {
    dispatch(getFilms())
  },[])
  useEffect(() => {
    console.log(people, planets, films)
  }, [people, planets, films])


  return (
    <div className="App">
  
    </div>
  );
}

export default App;
