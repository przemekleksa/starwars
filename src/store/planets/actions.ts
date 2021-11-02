import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPlanetsRequest } from "../../api/planets";

export const getPlanets = createAsyncThunk('people.getPlanets', ()=> {
    return getPlanetsRequest()
})