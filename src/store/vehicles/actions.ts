import { createAsyncThunk } from "@reduxjs/toolkit"
import { getVehiclesRequest } from "../../api/vehicles"

export const getVehicles = createAsyncThunk('vehicles/getVehicles', () => {
    return getVehiclesRequest()
})