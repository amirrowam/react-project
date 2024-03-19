import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slices/auth";
const store=configureStore({
    reducer:{
        auth:AuthReducer,
    }
})
export default store