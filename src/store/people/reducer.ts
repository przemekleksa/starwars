import { createReducer } from "@reduxjs/toolkit";
import { getPeople, getPersonDetails } from "./actions";
const initState = {
    people:[],
    isLoading: false,
    page: 1,
    detailedPerson: {},
    errorInfo: ''
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
        .addCase(getPeople.rejected, (state) => {
            state.isLoading = false;
            state.errorInfo = 'Przykro mi'
        })
        .addCase(getPersonDetails.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.detailedPerson = payload
        })
})