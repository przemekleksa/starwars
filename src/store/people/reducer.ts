import { createReducer } from "@reduxjs/toolkit";
import { getPeople, getPersonDetails, resetPeople } from "./actions";

const initState = {
    people:[],
    isLoading: false,
    page: 1,
    detailedPerson: {},
    errorInfo: '',
    reset: false,
    status: 'IDLE'
}

export const peopleReducer = createReducer(initState, builder => {
    builder
        .addCase(getPeople.fulfilled, (state, { payload } ) => {
            state.people = payload.data.results
        })
        .addCase(getPersonDetails.fulfilled, (state, { payload: { data } }) => {
            state.detailedPerson = data
        })
        .addCase(resetPeople, state => {
            state.people = initState.people;
            state.reset = true
        })
        .addMatcher((action) => action.type.endsWith('/pending'), state => {
            state.isLoading = true
            state.status = 'PENDING'
        } )
        .addMatcher((action) => action.type.endsWith('/rejected'), state => {
            state.isLoading = true
            state.errorInfo = 'unable to fetch data'
            state.status = 'REJECTED'
        } )
        .addMatcher((action) => action.type.endsWith('/fulfilled'), state => {
            state.isLoading = false
            state.status = 'FULFILLED'
        } )
        .addDefaultCase(((state) => {
            state.status = 'IDLE'
        }))
})