import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../SliceData/userSlice";

export const store = configureStore({
    reducer:{
        users : userSlice
    }
})