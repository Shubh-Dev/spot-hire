import { configureStore } from "@reduxjs/toolkit";
import jobReducer from './job'


const store = configureStore({
    reducer: { job: jobReducer }
});

export default store;