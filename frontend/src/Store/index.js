import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slices/Auth";
const store=configureStore({
    reducer:{
        auth:AuthReducer,
    }
})
export default store