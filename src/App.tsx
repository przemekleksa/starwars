import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import {selectPeople} from './store/people/selectors'
import { selectPlanets } from './store/planets/selectors';
import { selectFilms } from './store/films/selectors';
import Planets from './screens/Planets';
import People from './screens/People';
import Films from './screens/Films';
import Vehicles from './screens/Vehicles';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Http404 from './screens/Http404';
import Home from './screens/Home';
import Details from './components/Details';
import { selectVehicles } from './store/vehicles/selectors';


function App() {
  const people = useSelector(selectPeople);
  const planets = useSelector(selectPlanets);
  const films = useSelector(selectFilms)
  const vehicles = useSelector(selectVehicles)

  useEffect(() => {
    console.log(people, planets, films, vehicles)
  }, [people, planets, films, vehicles])


  return (
    <div className="App">
      <BrowserRouter>
          <nav>
            <h1>StarWars</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/people'>People</NavLink>
            <NavLink to='/planets'>Planets</NavLink>
            <NavLink to='/films'>Films</NavLink>
            <NavLink to='/vehicles'>Vehicles</NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/*' element={<Http404 />} />
            <Route path="/people" element={<People />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/films" element={<Films />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/details/:id" element={<Details/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
