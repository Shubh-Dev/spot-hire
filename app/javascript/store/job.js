import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    jobs: [{company: "Amazon", title: "Full-stack Dev"}],
    isApplied: false
};

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        loading(state) {
            state.isLoading = true

        },

        applied(state) {
            state.isApplied = true
        }
    }
});