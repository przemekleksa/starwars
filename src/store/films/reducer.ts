import { createReducer } from "@reduxjs/toolkit"
import { getFilms } from "./actions"

const initState = {
    films: [],
    isLoading: false
}

export const filmsReducer = createReducer(initState, builder => {
    builder
        .addCase(getFilms.pending, state => {
            state.isLoading = true
        })
        .addCase(getFilms.fulfilled, (state, { payload } ) => {
            state.isLoading = false
            state.films = payload.data.results
        })
})