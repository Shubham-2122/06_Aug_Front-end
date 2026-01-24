import { configureStore } from "@reduxjs/toolkit";
import  countSlice  from "../features/Counter/countSlice";
import  todoSlice  from "../features/Todo/todoSlice";

export const store = configureStore({
    reducer : {
        count : countSlice,
        todos : todoSlice
    }
})