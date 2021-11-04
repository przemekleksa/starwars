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
import List from './components/List/List';
import Planets from './screens/Planets';

function App() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const planets = useSelector(selectPlanets);
  const films = useSelector(selectFilms)
// selectro wypluwa state'a i daje mi dostep do tego kawalka ktory jest w selector.tsx

// const dupa = useSelector((state) => {selectPeople(selectPeople)})

  useEffect(() => {
    dispatch(getPeople())
  }, []);

  useEffect(() => {
    dispatch(getFilms())
  },[])
  useEffect(() => {
    console.log(people, planets, films)
  }, [people, planets, films])


  const onClickButton = (event: any) => {
    console.log(event);
  }

  return (
    <div className="App">
        <Planets />
    </div>
  );
}

export default App;
