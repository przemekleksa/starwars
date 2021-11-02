import { getDefaultMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { peopleReducer } from "./people/reducer"
import thunkMiddleware from 'redux-thunk'
import { planetReducer } from "./planets/reducer";



const rootReducer = combineReducers({
    people: peopleReducer,
    planets: planetReducer
})

function initStore() {
    return configureStore({
      reducer: rootReducer,
      middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
      }),
    });
  }
  
  const store = initStore();
  
  export default store;
