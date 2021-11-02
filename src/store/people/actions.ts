import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPeopleRequest } from "../../api/people";

export const getPeople = createAsyncThunk('people/getPeople', () => {
    return getPeopleRequest()
})