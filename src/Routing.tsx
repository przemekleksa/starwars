import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Planets from './screens/Planets';
import People from './screens/People';
import Films from './screens/Films';
import Vehicles from './screens/Vehicles';
import Http404 from './screens/Http404';
import Home from './screens/Home';
import Details from './components/Details/Details';

export const Routing = () => {
    return (
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/*' element={<Http404 />} />
            <Route path="/people" element={<People />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/films" element={<Films />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/:category/details/:id" element={<Details/>} />
          </Routes>
    )
}
