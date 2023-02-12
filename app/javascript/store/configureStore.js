import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./index";

const store = configureStore({
    reducer: jobReducer
});

export default store;