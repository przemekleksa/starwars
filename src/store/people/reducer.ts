import { createReducer } from "@reduxjs/toolkit";
import { getPeople } from "./actions";
const initState = {
    people:[],
    isLoading: false
}


export const peopleReducer = createReducer(initState, builder => {
    builder
        .addCase(getPeople.pending, state => {
            state.isLoading = true;
        })
        .addCase(getPeople.fulfilled, (state, { payload } ) => {
            state.isLoading = false;
            state.people = payload.data.results
        })
})