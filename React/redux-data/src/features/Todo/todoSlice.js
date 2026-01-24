import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo : ["jenil","mohit"]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        Addtodo:(state,action)=>{
            state.todo.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todo = state.todo.filter((data,index)=> index !== action.payload)
        }

    }
})

export const {Addtodo,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;