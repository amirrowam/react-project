import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slices/Auth";
import CartSlice from "./Slices/CartSlice";
const store=configureStore({
    reducer:{
        auth:AuthReducer,
        cart:CartSlice,
    }
})
export default store