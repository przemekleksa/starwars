import { createReducer } from "@reduxjs/toolkit"
import { getPlanetsRequest } from "../../api/planets"
import { getPlanets } from "./actions"

const initState = {
    planets: [],
    isLoading: false
}

export const planetReducer = createReducer(initState, builder => {
    builder
        .addCase(getPlanets.pending, state => {
            state.isLoading = true;
        })
        .addCase(getPlanets.fulfilled, (state, { payload } ) => {
            state.isLoading = false;
            state.planets = payload.data.results
        })
        .addCase(getPlanets.rejected, (state) =>{
            state.isLoading = false;
        })
})