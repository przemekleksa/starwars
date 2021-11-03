import { createAsyncThunk } from "@reduxjs/toolkit"
import { getFilmsRequest } from "../../api/films"

export const getFilms = createAsyncThunk('films/getFilms', () => {
    return getFilmsRequest()
})