import { createReducer } from "@reduxjs/toolkit"
import { getVehicles } from "./actions"

const initState = {
    vehicles: [],
    isLoading: false
}

export const vehiclesReducer = createReducer(initState, builder => {
    builder
        .addCase(getVehicles.pending, state => {
            state.isLoading = true
        })
        .addCase(getVehicles.fulfilled, (state, { payload } ) => {
            state.isLoading = false
            state.vehicles = payload.data.results
        })
})