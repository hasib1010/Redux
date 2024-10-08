import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../fearures/counterSlice"
const store = configureStore({
    reducer:{
        counters:  counterReducer
    }
})
export default store