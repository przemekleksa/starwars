import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import {selectPeople} from './store/people/selectors'
import { selectPlanets } from './store/planets/selectors';
import { selectFilms } from './store/films/selectors';
import Planets from './screens/Planets';
import People from './screens/People';
import Films from './screens/Films';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Http404 from './screens/Http404';
import Home from './screens/Home';
import Details from './components/Details';


function App() {
  const people = useSelector(selectPeople);
  const planets = useSelector(selectPlanets);
  const films = useSelector(selectFilms)

  useEffect(() => {
    console.log(people, planets, films)
  }, [people, planets, films])


  return (
    <div className="App">
      <BrowserRouter>
          <nav>
            <h1>StarWars</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/people'>People</NavLink>
            <NavLink to='/planets'>Planets</NavLink>
            <NavLink to='/films'>Films</NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/*' element={<Http404 />} />
            <Route path="/people" element={<People />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/films" element={<Films />} />
            <Route path="/details/:id" element={<Details/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
